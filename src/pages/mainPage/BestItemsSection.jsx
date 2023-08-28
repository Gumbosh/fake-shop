import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import ProductCard from "../../components/productsCard/ProductCard";
import ShopNowLink from "../../components/shopNowLink/ShopNowLink";

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
    <section className="flex flex-col gap-8 items-center mb-20">
      <article className="flex flex-col items-center text-center ">
        <h3 className="font-bold text-custom_important_text">{title}</h3>
        <p className="text-sm">{description}</p>
      </article>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <section className="grid gap-5 justify-center grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 items-center ">
          {topProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      )}

      <ShopNowLink linkTo={linkTo} />
    </section>
  );
};

export default BestItemsSection;
