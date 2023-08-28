import { Link } from "react-router-dom";
import ShopNowLink from "../../components/shopNowLink/ShopNowLink";

const ImageCard = ({ linkTo, image, alt, title, description }) => {
  return (
    <article className="flex-1">
      <Link to={linkTo}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-[600px] w-full object-cover"
        />
      </Link>
      <section className="flex flex-col mt-2">
        <h3 className="font-bold text-custom_important_text">{title}</h3>
        <p className="text-sm mb-2">{description}</p>
        <article>
          <ShopNowLink linkTo={linkTo} />
        </article>
      </section>
    </article>
  );
};

export default ImageCard;
