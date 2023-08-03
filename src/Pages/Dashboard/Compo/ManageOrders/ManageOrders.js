import React, { useEffect, useState } from "react";
import ManageOrder from "./Compo/ManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://glass-store-hhti.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  // delete a product
  const handleRemove = (id) => {
    const warning = window.confirm("Are you sure want to delete?");
    if (warning) {
      fetch(`https://glass-store-hhti.onrender.com/orders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
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
  // update product status
  const statusHandle = (id) => {
    fetch(`https://glass-store-hhti.onrender.com/orders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <section>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">S/N</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Product title</th>
                    <th className="px-4 py-3">email</th>
                    <th className="px-4 py-3">status</th>
                    <th className="px-4 py-3" title="Order Manage">
                      O/m
                    </th>
                    <th className="px-4 py-3">action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {orders.map((item, index) => (
                    <ManageOrder
                      key={item._id}
                      order={item}
                      handleRemove={handleRemove}
                      serial={index + 1}
                      statusHandle={statusHandle}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageOrders;
