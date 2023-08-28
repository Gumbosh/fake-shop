import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../features/dropdownSlice";
import productsReducer from "../features/productsSlice";
import newsletterReducer from "../features/newsletterSlice";
import cartReducer from "../features/cartSlice";
import searchReducer from "../features/searchSlice";

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    products: productsReducer,
    newsletter: newsletterReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;
