import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { getTotals } from "./features/cartSlice";
import { fetchProducts } from "./features/productsSlice";
import RouteChangeHandler from "./utils/RouteChangeHandler";
import store from "./app/store";
import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import ProductsPage from "./pages/productsPage";
import ProductDetailsPage from "./pages/productDetailsPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

store.dispatch(getTotals());
store.dispatch(fetchProducts());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouteChangeHandler />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
