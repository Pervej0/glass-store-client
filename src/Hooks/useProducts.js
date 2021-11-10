import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoaded(false);
      });
  }, []);
  return [products, isLoaded];
};

export default useProducts;
