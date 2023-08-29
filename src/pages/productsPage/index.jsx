import PageContent from "../../layout/PageLayout";
import ProductCard from "../../components/productsCard/ProductCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Handle the URL category (products/:category) and store the corresponding API names in the productsCategory variable.
  // If there is no directory matching the specified category, render an error message.
  let productsCategory;
  if (!category) {
    productsCategory = "All Products";
  } else if (category === "men") {
    productsCategory = "men's clothing";
  } else if (category === "women") {
    productsCategory = "women's clothing";
  } else if (category === "electronics") {
    productsCategory = "electronics";
  } else if (category === "jewelery") {
    productsCategory = "jewelery";
  } else {
    return (
      <PageContent>
        <h2 className="text-center text-2xl italic font-bold">
          {`There is no category named "${category}"`}
        </h2>
      </PageContent>
    );
  }

  //Filter products based on category value.
  const filteredProducts = category
    ? products.filter((product) => product.category === productsCategory)
    : products;

  return (
    <PageContent>
      <section className="flex flex-col items-center">
        <h2 className="text-center text-custom_important_text mb-5 text-2xl italic font-bold capitalize">
          {productsCategory}
        </h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section className="grid gap-5 grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {filteredProducts.map((item) => (
              <section key={item.id} className="w-[205px] lg:w-[160px]">
                <article>
                  <ProductCard key={item.id} product={item} />
                </article>
                <article className="text-xs flex flex-col gap-1 my-2">
                  <p className="text-custom_placeholder_text text-[0.5rem] uppercase">
                    {item.category}
                  </p>
                  <h3 className="font-bold text-custom_important_text">
                    {item.title}
                  </h3>
                  <p>${item.price.toFixed(2)}</p>
                </article>
              </section>
            ))}
          </section>
        )}
      </section>
    </PageContent>
  );
};

export default ProductsPage;
