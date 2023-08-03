import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetch("https://glass-store-hhti.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoaded(false);
      });
  }, []);
  return [products, isLoaded, setProducts];
};

export default useProducts;
