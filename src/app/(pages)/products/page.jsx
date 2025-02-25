import Innovation from "@/app/components/products/Innovation";
import ProductCards from "@/app/components/products/ProductCards";
import ProductHero2 from "@/app/components/products/ProductHero2";
import { getProductPage } from "@/sanity/lib/queries";

import React from "react";

const Products = async () => {
  const productData = await getProductPage();

  return (
    <>
      <ProductHero2 data={productData.secondherosection} />
      <ProductCards data={productData.productsection} />
      <Innovation />
    </>
  );
};

export default Products;
