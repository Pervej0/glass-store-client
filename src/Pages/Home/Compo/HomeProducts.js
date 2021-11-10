import React from "react";
import useProducts from "../../../Hooks/useProducts";
import Product from "../../Shop/Compo/Products/Compo/Product";

const HomeProducts = () => {
  const [products] = useProducts();
  return (
    <section className="md:px-14 p-3">
      <div className="text-center mb-20">
        <h2 className="text-3xl pb-2 font-semibold font-mono">Products</h2>
        <hr className="w-1/4 mx-auto border-black" />
      </div>
      <div>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {products.slice(0, 8).map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="inline-block py-2 px-5 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
