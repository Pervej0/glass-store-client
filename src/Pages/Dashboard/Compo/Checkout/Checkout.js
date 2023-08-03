import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    fetch(`https://glass-store-hhti.onrender.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "emailllllllllll");
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
          {totalCost === 0 ? (
            <div className="text-center">
              <h1 className="font-serif text-xl my-4">
                You currently haven't any order to pay.
              </h1>
              <Link
                to="/shop"
                className="border-2 border-black px-4 py-1 uppercase font-semibold"
              >
                Visit store
              </Link>
            </div>
          ) : (
            <>
              <div>
                {orderedItem.map((item) => (
                  <div key={item._id} className="py-1 border-b">
                    <h5 className="text-gray-700 font-semibold mt-3">
                      {item.productTitle}
                    </h5>
                    <h6>price: ${item.price}</h6>
                  </div>
                ))}
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
                </div>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Checkout;
