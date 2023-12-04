import { Link } from "react-router-dom";

const ShopNowBtn = ({ linkTo }) => {
  return (
    <Link
      to={linkTo}
      className="bg-custom_pale_dogwood border border-black px-8 py-2 font-semibold text-xs"
    >
      SHOP NOW
    </Link>
  );
};

export default ShopNowBtn;
