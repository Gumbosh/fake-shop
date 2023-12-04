import { Link } from "react-router-dom";
import ShopNowBtn from "../../components/shopNowBtn/ShopNowBtn";

const ImageCard = ({ linkTo, image, alt, title, description }) => {
  return (
    <article className="flex-1">
      <Link to={linkTo}>
        <img src={image} alt={alt} className="h-[600px] w-full object-cover" />
      </Link>
      <section className="flex flex-col gap-1 mt-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-md mb-2">{description}</p>
        <article>
          <ShopNowBtn linkTo={linkTo} />
        </article>
      </section>
    </article>
  );
};

export default ImageCard;
