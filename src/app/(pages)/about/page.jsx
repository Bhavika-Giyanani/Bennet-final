
import AboutHero from "@/app/components/about/AboutHero";
import Commitment from "@/app/components/about/Commitment";
import Leaders from "@/app/components/about/Leaders";
import Values from "@/app/components/about/Values";
import { getAboutPage } from "@/sanity/lib/queries";
import React from "react";

const page = async () => {
  const aboutData = await getAboutPage();

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-0 ">
        <AboutHero data={aboutData.herosection}/>
        <Commitment />
        <div id="Values">
          <Values />
        </div>
        <div id="Leaders">
          <Leaders data={aboutData.leadersection} />
        </div>
      </div>
    </>
  );
};

export default page;
