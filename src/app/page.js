"use client";

import React from "react";
import ImgHero5 from "./components/home/ImgHero5";
import ImageMarquee from "./components/home/ImageMarquee";
import Stats from "./components/home/Stats";
import Cards from "./components/home/Cards";
import Manufacturing from "./components/home/Manufacturing";
import Products from "./components/home/Products";
import Careers from "./components/home/Careers";
import HomeHero from "./components/home/HomeHero";
import MapWrapper from "./components/MapWrapper.jsx";
import Innovation from "./components/home/Innovation";
const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden mt-24 md:mt-20 container">
      <ImgHero5 />
        <HomeHero />
        <Cards />
        <Innovation />
        <Manufacturing/>
        <div className="max-w-[1440px] mx-auto px-0">
          <MapWrapper />
        </div>
        <Products />
        <Stats />
        <Careers />
        <ImageMarquee />
      </div>
    </>
  );
};

export default Home;