import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import ProductCard from "../../components/productsCard/ProductCard";
import ShopNowBtn from "../../components/shopNowBtn/ShopNowBtn";

const BestItemsSection = ({ title, description, linkTo, category }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Getting top 4 products from selected category
  const topProducts = products
    .filter((product) => product.category === `${category}`)
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  return (
    <section className="flex flex-col gap-6 items-center mb-20">
      <article className="flex flex-col items-center text-center text-md gap-2">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-md">{description}</p>
      </article>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <section className="grid gap-6 justify-center grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 items-center">
          {topProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      )}
      <ShopNowBtn linkTo={linkTo} />
    </section>
  );
};

export default BestItemsSection;
