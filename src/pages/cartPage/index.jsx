import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import PageContent from "../../layout/PageLayout";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
} from "../../features/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeFromCartHandler = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const decreaseCartHandler = (cartItem) => dispatch(decreaseCart(cartItem));
  const increaseQuantityHandler = (cartItem) => dispatch(addToCart(cartItem));
  const clearCartHandler = (cartItem) => dispatch(clearCart());

  useEffect(() => {
    dispatch(getTotals());
  }, [cart.cartItems, dispatch]);

  return (
    <PageContent>
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
          <h3 className="mb-5 text-2xl italic font-bold text-custom_important_text">
            Shopping Cart
          </h3>
          <section>
            {cart.cartItems.map((item) => (
              <section key={item.id} className="flex gap-2 text-xs mb-5">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[41px] h-[55px] min-w-[41px]"
                  />
                </Link>
                <div className="w-full">
                  <div className="flex md:gap-2.5 text-custom_important_text font-bold ">
                    <Link to={`/product/${item.id}`} className="md:w-2/3">
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
            to="/cart/checkout"
            onClick={() => clearCartHandler()}
            className="text-lg italic text-custom_pale_dogwood-1000 shadow-sm rounded-md bg-gradient-to-br from-custom_pale_dogwood-400 to-custom_pale_dogwood px-6 py-2"
          >
            Proceed to Checkout
          </Link>
        </section>
      )}
    </PageContent>
  );
}

export default CartPage;
