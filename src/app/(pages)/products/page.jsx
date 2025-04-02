import ProductCards from "@/app/components/ourcapabilities/ProductCards";
import ProductHero2 from "@/app/components/ourcapabilities/ProductHero2";
import { getProductPage } from "@/sanity/lib/queries";
import React from "react";

const products = async () => {
  const productData = await getProductPage();

  return (
    <>
      <ProductHero2 /> 
      <ProductCards />

    </>
  );
};

export default products;
