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

  if (!isLoading && !product) {
    return (
      <PageContent>
        <h2 className="text-center text-2xl font-bold">
          {`There is no item with id: ${id}`}
        </h2>
      </PageContent>
    );
  }

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
            <h2 className="font-bold text-2xl">{product.title}</h2>
            <p className="text-base">
              <span className="font-bold">Description: </span>
              <span className="">{product.description}</span>
            </p>
            <p className="text-sm">
              <span className="font-bold">Category: </span>
              <span className="uppercase">{product.category}</span>
            </p>
            <p className="font-bold text-xl">
              {`$${product.price.toFixed(2)}`}
            </p>

            <button
              className="bg-custom_pale_dogwood hover:bg-custom_pale_dogwood-600 border border-black text-lg font-semibold md:w-full w-3/4 py-2"
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
