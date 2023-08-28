import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="h-[275px] w-[205px] lg:h-[210px] lg:w-[160px]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full"
        />
      </Link>
    </div>
  );
};

export default ProductCard;
