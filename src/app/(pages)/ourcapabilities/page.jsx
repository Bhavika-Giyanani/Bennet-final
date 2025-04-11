import Innovation from "@/app/components/ourcapabilities/Innovation";
import { getProductPage } from "@/sanity/lib/queries";
import Network from "@/app/components/ourcapabilities/Network";
import React from "react";

const ourcapabilities = async () => {
  const productData = await getProductPage();

  return (
    <>
      <div id="/Innovation"> <Innovation />  </div>
      <div id="/Network">  <Network /> </div>

    </>
  );
};

export default ourcapabilities;
