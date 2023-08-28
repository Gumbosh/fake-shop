import PageLayout from "../../layout/PageLayout";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <PageLayout>
      <main className="text-custom_important_text text-center flex flex-col items-center gap-5">
        <h2 className="font-bold text-2xl">Thank You For Your Order</h2>
        <p className="text-sm">
          Your order has been placed and is being processed. You will recive an
          email with the order details.
        </p>
        <Link
          to="/"
          className="text-lg italic text-custom_pale_dogwood-1000 shadow-sm rounded-md bg-gradient-to-br from-custom_pale_dogwood-400 to-custom_pale_dogwood px-6 py-2"
        >
          Back to homepage
        </Link>
      </main>
    </PageLayout>
  );
};

export default CheckoutPage;
