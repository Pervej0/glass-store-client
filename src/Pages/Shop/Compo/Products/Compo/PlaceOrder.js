import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import OrderForm from "./OrderForm";

const PlaceOrder = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  // load specific product
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);
  return (
    <section className="md:px-14">
      <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
        <div>
          <div>
            <img src={product?.img} alt="" />
          </div>
          <div className="mt-2">
            <h5 className="text-2xl font-semibold">price: ${product?.price}</h5>
          </div>
        </div>
        <div className="col-span-2 md:p-10">
          <OrderForm product={product} />
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
