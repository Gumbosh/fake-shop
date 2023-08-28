import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../features/productsSlice";
import { setActiveDropdown } from "../../features/dropdownSlice";
import { addToCart } from "../../features/cartSlice";
import PageContent from "../../layout/PageLayout";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((product) => product.id === parseInt(id));

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(setActiveDropdown("cart"));
  };

  return (
    <PageContent>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <section className="flex md:flex-col md:items-center gap-5">
          <article className="flex-1">
            <img
              src={product.image}
              alt={product.title}
              className="h-[600px] md:h-[400px] w-full object-fill"
            />
          </article>
          <article className="flex flex-col gap-6 flex-1 text-xs">
            <h2 className="font-bold text-xl italic text-custom_important_text">
              {product.title}
            </h2>
            <p className="text-sm">
              <span className="font-bold text-custom_important_text">
                DESCRIPTION:{" "}
              </span>
              <span>{product.description}</span>
            </p>
            <p>
              <span className="font-bold text-custom_important_text">
                CATEGORY:{" "}
              </span>
              <span className="capitalize">{product.category}</span>
            </p>
            <p className="font-bold text-lg text-custom_important_text">
              {`$${product.price.toFixed(2)}`}
            </p>

            <button
              className="text-base italic text-custom_pale_dogwood-1000 shadow-sm rounded-md bg-gradient-to-br from-custom_pale_dogwood-400 to-custom_pale_dogwood py-2"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </article>
        </section>
      )}
    </PageContent>
  );
};

export default ProductDetailsPage;
