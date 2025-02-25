"use client";

import dynamic from "next/dynamic";

// Move the dynamic import to this wrapper component
const DynamicWorldMap = dynamic(() => import("./worldMap"), {
  ssr: false,
});

const MapWrapper = () => {
  return <DynamicWorldMap />;
};

export default MapWrapper;