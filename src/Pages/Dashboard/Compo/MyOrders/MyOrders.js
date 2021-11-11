import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Spinner from "../../../Shared/Spinner/Spinner";
import Order from "./Compo/Order";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsSuccess(true);
      });
  }, []);

  const handleRemove = (id) => {
    const warning = window.confirm("Are you sure want to delete?");
    if (warning) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            const remainOrders = orders.filter((item) => item._id !== id);
            setOrders(remainOrders);
          }
        });
    }
  };

  return (
    <section className="md:px-14 p-3">
      {!isSuccess ? (
        <Spinner />
      ) : (
        <div className="flex flex-col order-table">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                      <th className="px-4 py-3">S/N</th>
                      <th className="px-4 py-3">Product Title</th>
                      <th className="px-4 py-3">images</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {orders.map((item, index) => (
                      <Order
                        key={item._id}
                        order={item}
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
  );
};

export default MyOrders;
