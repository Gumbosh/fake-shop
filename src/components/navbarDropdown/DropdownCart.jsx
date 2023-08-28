import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTotals } from "../../features/cartSlice";
import { clearActiveDropdown } from "../../features/dropdownSlice";
import DropdownTemplate from "./DropdownTemplate";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
} from "../../features/cartSlice";

const DropdownCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);

  const removeFromCartHandler = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const decreaseCartHandler = (cartItem) => dispatch(decreaseCart(cartItem));
  const increaseQuantityHandler = (cartItem) => dispatch(addToCart(cartItem));

  useEffect(() => {
    dispatch(getTotals());
  }, [cart.cartItems, dispatch]);

  const closeDropdownHandler = () => {
    if (activeDropdown) {
      dispatch(clearActiveDropdown());
    }
  };

  return (
    <DropdownTemplate>
      {cart.cartItems.length === 0 ? (
        <section className="text-center text-custom_important_text">
          <h3 className="font-bold text-xl mb-2.5">Your cart is empty</h3>
          <Link to={"/products"} onClick={closeDropdownHandler}>
            <h4 className="underline">Start Shoping</h4>
          </Link>
        </section>
      ) : (
        <section>
          <h3 className="text-xl font-bold mb-5 text-custom_important_text">
            Shopping Cart
          </h3>
          <section className="max-h-[228px] overflow-y-auto overflow-x-hidden">
            {cart.cartItems.map((item) => (
              <section key={item.id} className="flex gap-2 text-xs mb-5">
                <Link onClick={closeDropdownHandler} to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[41px] h-[55px] min-w-[41px]"
                  />
                </Link>
                <div className="w-full">
                  <div className="flex md:gap-2.5 text-custom_important_text font-bold ">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeDropdownHandler}
                      className="md:w-2/3"
                    >
                      <p className="truncate">{item.title}</p>
                    </Link>
                    <button
                      className="ml-2.5"
                      onClick={() => removeFromCartHandler(item)}
                    >
                      X
                    </button>
                  </div>
                  <div className="flex gap-2 text-base items-center">
                    <button onClick={() => decreaseCartHandler(item)}>-</button>
                    <p className="text-xs">{item.cartQuantity}</p>
                    <button onClick={() => increaseQuantityHandler(item)}>
                      +
                    </button>
                  </div>
                  <p>${(item.price * item.cartQuantity).toFixed(2)}</p>
                </div>
              </section>
            ))}
          </section>
          <h4 className="mb-5 font-bold text-sm text-custom_important_text">
            TOTAL: ${cart.cartTotalAmount}
          </h4>
          <div className="text-center">
            <Link to="/cart" onClick={closeDropdownHandler}>
              <h3 className="text-xl underline font-bold text-custom_important_text">
                Go to Shopping Cart
              </h3>
            </Link>
          </div>
        </section>
      )}
    </DropdownTemplate>
  );
};

export default DropdownCart;
