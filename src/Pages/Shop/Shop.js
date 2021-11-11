import React from "react";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Products from "./Compo/Products/Products";
import ShopBanner from "./Compo/ShopBanner";
import "./Shop.css";

const Shop = () => {
  return (
    <>
      <NavigationBar />
      <ShopBanner />
      <Products />
    </>
  );
};

export default Shop;
