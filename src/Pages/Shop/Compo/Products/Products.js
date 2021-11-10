import React, { useEffect, useState } from "react";
import Product from "./Compo/Product";
import useProducts from "../../../../Hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  return (
    <section className="md:px-14 p-3 my-14">
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
