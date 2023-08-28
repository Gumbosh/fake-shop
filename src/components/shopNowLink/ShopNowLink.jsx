import { Link } from "react-router-dom";

const ShopNowLink = ({ linkTo }) => {
  return (
    <Link to={linkTo} className="text-sm underline text-custom_important_text">
      SHOP NOW
    </Link>
  );
};

export default ShopNowLink;
