"use client";

import React, { useEffect, useState } from "react";
import ImgHero from "./components/home/ImgHero";
import ImageMarquee from "./components/home/ImageMarquee";
import Stats from "./components/home/Stats";
import Cards from "./components/home/Cards";
import Network from "./components/home/Network";
import Leaders from "@/app/components/about/Leaders";
import Products from "./components/home/Products";
import Careers from "./components/home/Careers";
import HomeHero from "./components/home/HomeHero";
import MapWrapper from "./components/MapWrapper.jsx";
import { getHomePage, getAboutPage } from "@/sanity/lib/queries";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <ImgHero />
        <HomeHero />
        <Cards />
        <Stats />
        <Network />
        <div className="max-w-[1440px] mx-auto px-0">
          <MapWrapper />
        </div>
        <Leaders />
        <Products />
        <Careers />
        <ImageMarquee />
      </div>
    </>
  );
};

export default Home;