import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Products from "./Compo/Products/Products";
import ShopBanner from "./Compo/ShopBanner";
import "./Shop.css";

const Shop = () => {
  return (
    <>
      <header className="bg-white navLink-color">
        <NavigationBar />
      </header>
      <ShopBanner />
      <Products />
      <Footer />
    </>
  );
};

export default Shop;
