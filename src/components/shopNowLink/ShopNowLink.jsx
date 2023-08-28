import { Link } from "react-router-dom";

const ShopNowLink = ({ linkTo }) => {
  return (
    <Link
      to={linkTo}
      className="text-sm italic text-custom_pale_dogwood-1000 shadow-sm rounded-md bg-gradient-to-br from-custom_pale_dogwood-400 to-custom_pale_dogwood px-6 py-2"
    >
      Shop Now
    </Link>
  );
};

export default ShopNowLink;
