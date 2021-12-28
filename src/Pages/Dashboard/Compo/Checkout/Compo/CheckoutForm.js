import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Spinner from "../../../../Shared/Spinner/Spinner";

const CheckoutForm = ({ paymentDetails }) => {
  const [errors, setErrors] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsprocesing] = useState(false);
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://guarded-oasis-87785.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.log(error));
  }, [paymentDetails]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    setIsprocesing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setErrors(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    setErrors("");
    setIsprocesing(false);

    // intent payment---
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: paymentDetails.userName,
          },
        },
      });

    if (intentError) {
      setSuccess("");
      setErrors(intentError.message);
    } else {
      console.log(paymentIntent);
      setSuccess("Your payment proceed successfully");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-500 text-sm">{errors}</p>
      <p className="text-green-500 text-sm">{success}</p>
      {isProcessing ? (
        <Spinner />
      ) : (
        <button
          className="bg-gray-700 text-white inline-block mt-3 py-1 px-5 rounded font semibold"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
