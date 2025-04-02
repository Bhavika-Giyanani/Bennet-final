import Innovation from "@/app/components/products/Innovation";
import ProductCards from "@/app/components/products/ProductCards";
import ProductHero2 from "@/app/components/products/ProductHero2";
import { getProductPage } from "@/sanity/lib/queries";
import Network from "@/app/components/products/Network";
import React from "react";

const Products = async () => {
  const productData = await getProductPage();

  return (
    <>
      <div id="Innovation"> <Innovation />  </div>
      <div id="Products">  <ProductHero2 /> </div>
      <ProductCards />
      <div id="Network">  <Network /> </div>

    </>
  );
};

export default Products;
