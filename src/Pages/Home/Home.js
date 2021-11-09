import React from "react";
import Categories from "./Compo/Categories";
import HomeBanner from "./Compo/HomeBanner";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Categories />
      {/* <Shop></Shop> */}
    </div>
  );
};

export default Home;
