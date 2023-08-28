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
        <section className="flex flex-col items-center gap-2.5 text-custom_important_text">
          <h3 className="font-bold italic text-2xl">Your cart is empty</h3>
          <Link
            to={"/products"}
            className="text-md italic text-custom_pale_dogwood-1000 shadow-sm rounded-md bg-gradient-to-br from-custom_pale_dogwood-400 to-custom_pale_dogwood px-6 py-2"
          >
            Start Shopping
          </Link>
        </section>
      ) : (
        <section>
          <h3 className="text-2xl italic font-bold mb-5 text-custom_important_text">
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
          <h4 className="mb-6 font-bold text-sm text-custom_important_text">
            TOTAL: ${cart.cartTotalAmount}
          </h4>
          <Link
            to="/cart"
            onClick={closeDropdownHandler}
            className="text-lg italic text-custom_pale_dogwood-1000 shadow-sm rounded-md bg-gradient-to-br from-custom_pale_dogwood-400 to-custom_pale_dogwood px-6 py-2"
          >
            Go to Shopping Cart
          </Link>
        </section>
      )}
    </DropdownTemplate>
  );
};

export default DropdownCart;
