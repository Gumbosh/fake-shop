import { Link } from "react-router-dom";

const ShopNowBtn = ({ linkTo }) => {
  return (
    <Link
      to={linkTo}
      className="bg-custom_pale_dogwood hover:bg-custom_pale_dogwood-600 border border-black px-6 py-2 font-semibold text-xs"
    >
      SHOP NOW
    </Link>
  );
};

export default ShopNowBtn;
