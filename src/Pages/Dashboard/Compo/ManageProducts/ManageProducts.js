import React, { useEffect, useState } from "react";
import useProducts from "../../../../Hooks/useProducts";
import Spinner from "../../../Shared/Spinner/Spinner";
import ManageProduct from "./Compo/ManageProduct";

const ManageProducts = () => {
  const [products, isLoaded, setProducts] = useProducts();

  const handleRemove = (id) => {
    console.log(id);
    const warning = window.confirm("Are you sure want to delete?");
    if (warning) {
      fetch(`https://guarded-oasis-87785.herokuapp.com/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            const remainOrders = products.filter((item) => item._id !== id);
            setProducts(remainOrders);
          }
          console.log(result);
        });
    }
  };
  console.log(products);

  return (
    <>
      <section className="md:px-14 p-3">
        {isLoaded ? (
          <Spinner />
        ) : (
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">S/N</th>
                        <th className="px-4 py-3">Product Title</th>
                        <th className="px-4 py-3">images</th>
                        <th className="px-4 py-3">action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {products.map((item, index) => (
                        <ManageProduct
                          key={item._id}
                          product={item}
                          serial={index + 1}
                          handleRemove={handleRemove}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ManageProducts;
