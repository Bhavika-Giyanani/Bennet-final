"use client";

import React, { useEffect, useState } from "react";
import ImgHero from "./components/home/ImgHero";
import ImgHero2 from "./components/home/ImgHero2";
import ImgHero3 from "./components/home/ImgHero3";
import ImgHero4 from "./components/home/ImgHero4";
import ImageMarquee from "./components/home/ImageMarquee";
import Stats from "./components/home/Stats";
import Cards from "./components/home/Cards";
import Manufacturing from "./components/home/Manufacturing";
import Leaders from "@/app/components/about/Leaders";
import Products from "./components/home/Products";
import Careers from "./components/home/Careers";
import HomeHero from "./components/home/HomeHero";
import MapWrapper from "./components/MapWrapper.jsx";
import { getHomePage, getAboutPage } from "@/sanity/lib/queries";
import Innovation from "./components/home/Innovation";
const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <ImgHero />
        <ImgHero2 />
        <ImgHero3 />
        <ImgHero4 />
        <HomeHero />
        <Cards />
        <Innovation />
        <Manufacturing/>
        <div className="max-w-[1440px] mx-auto px-0">
          <MapWrapper />
        </div>
        <Leaders />
        <Products />
        <Stats />
        <Careers />
        <ImageMarquee />
      </div>
    </>
  );
};

export default Home;