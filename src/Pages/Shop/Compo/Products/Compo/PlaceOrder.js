import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import NavigationBar from "../../../../Shared/NavigationBar/NavigationBar";
import OrderForm from "./OrderForm";

const PlaceOrder = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  // load specific product
  useEffect(() => {
    fetch(`https://guarded-oasis-87785.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <NavigationBar />
      <section className="md:px-14 p-3">
        <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
          <div className="my-4">
            <div>
              <img src={product?.img} alt="" />
            </div>
            <div className="mt-3">
              <h5 className="text-2xl font-semibold">
                price: ${product?.price}
              </h5>
              <p className="my-3">{product.description}</p>
            </div>
          </div>
          <div className="col-span-2 md:p-10">
            <OrderForm product={product} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceOrder;
