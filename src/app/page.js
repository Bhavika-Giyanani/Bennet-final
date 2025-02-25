import React from "react";
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
import { getHomePage } from "@/sanity/lib/queries";
import { getAboutPage } from "@/sanity/lib/queries";

const Home = async () => {
  const homeData = await getHomePage();
  const aboutData = await getAboutPage();

  return (
    <>
      <div className="overflow-x-hidden">
        <ImgHero data={homeData.herosection} />
        <HomeHero />
        <Cards />
        <Stats />
        <Network />
        <div className="max-w-[1440px] mx-auto px-0">
          <MapWrapper />
        </div>
        <Leaders data={aboutData.leadersection} />
        <Products data={homeData.productsection} />
        <Careers />
        <ImageMarquee />
      </div>
    </>
  );
};

export default Home;
