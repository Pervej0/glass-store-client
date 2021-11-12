import React from "react";
import Footer from "../Shared/Footer/Footer";
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
      <Footer />
    </>
  );
};

export default Shop;
