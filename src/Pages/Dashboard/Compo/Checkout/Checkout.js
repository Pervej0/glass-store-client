import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Spinner from "../../../Shared/Spinner/Spinner";
import CheckoutForm from "./Compo/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KBZG4LNid0QRGrCCNYyv0MZfv9B4M4vCVBz0Hpl7UPbuhtheBJu1454NbDMaIdjzmK1lsdPG71nuqLmqFhhggq400pHKlhHsk"
);
const Checkout = () => {
  const { user } = useAuth();
  const [orderedItem, setOrderedItem] = useState([]);
  const [IsSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    fetch(`https://guarded-oasis-87785.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderedItem(data);
        setIsSuccess(true);
      });
  }, []);

  let productsPrice = 0;
  for (let singlePrice of orderedItem) {
    productsPrice += singlePrice.price;
  }
  const vatCost = 0.1 * productsPrice;
  const totalCost = productsPrice + vatCost;

  const paymentDetails = {
    totalCost: totalCost,
    userName: user.displayName,
    userEmail: user.email,
  };

  return (
    <section>
      {!IsSuccess ? (
        <Spinner />
      ) : (
        <>
          <div>
            {orderedItem.map((item) => (
              <div key={item._id} className="py-1 border-b">
                <h5 className="text-gray-700 font-semibold mt-3">
                  {item.productTitle}
                </h5>
                <h6>price: {item.price}</h6>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl mt-3 text-sm font-serif">
              You have total {orderedItem?.length} prodcts to buy
            </h3>
          </div>
          <div className="grid gap-10 grid-cols-3">
            <div className="col-span-2 my-4">
              <Elements stripe={stripePromise}>
                <CheckoutForm paymentDetails={paymentDetails} />
              </Elements>
            </div>
            <div className="p-3">
              <table className="w-full mb-4">
                <tbody>
                  <tr className="border-b border-black">
                    <td className="pb-3">Totall item:</td>
                    <td>{orderedItem.length}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="pb-3">Price:</td>
                    <td>${productsPrice}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="pb-3">Vat:</td>
                    <td>${vatCost} or 10%</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="pb-3">Grand Total: </td>
                    <td>${totalCost}</td>
                  </tr>
                </tbody>
              </table>
              {/*  <button
                // onClick={handlePayment}
                type="button"
                className="bg-green-600 px-4 py-2 font-semibold text-white"
              >
                Pay
              </button> */}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Checkout;
