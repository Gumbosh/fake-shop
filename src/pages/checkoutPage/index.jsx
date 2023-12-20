import PageLayout from "../../layout/PageLayout";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <PageLayout>
      <main className="text-center flex flex-col items-center gap-5">
        <h2 className="font-bold text-3xl">Thank You For Your Order</h2>
        <p className="text-base">
          Your order has been placed and is being processed. You will recive an
          email with the order details.
        </p>
        <Link
          to="/"
          className="bg-custom_pale_dogwood hover:bg-custom_pale_dogwood-600 border border-black font-semibold text-base px-6 py-2"
        >
          Back to homepage
        </Link>
      </main>
    </PageLayout>
  );
};

export default CheckoutPage;
