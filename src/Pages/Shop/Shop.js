import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Products from "./Compo/Products/Products";
import ShopBanner from "./Compo/ShopBanner";
import ShopGallery from "./Compo/ShopGallery";
import "./Shop.css";

const Shop = () => {
  return (
    <>
      <ShopBanner />
      <Products />
      <ShopGallery />
    </>
  );
};

export default Shop;
