import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Categories from "./Compo/Categories";
import HomeBanner from "./Compo/HomeBanner";
import HomeProducts from "./Compo/HomeProducts";
import Reviews from "./Compo/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Categories />
      <HomeProducts />
      <Reviews />
    </>
  );
};

export default Home;
