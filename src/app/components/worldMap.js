"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = {
  Vadodara: { coords: [22.3, 73.2], name: "Vadodara" },
  Baddi: { coords: [30.9, 76.8], name: "Baddi" },
};

const createMarkerIcon = (color) =>
  new L.DivIcon({
    className: "custom-marker",
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
      <path fill="${color}" d="M12 2C8.14 2 5 5.14 5 9c0 4.42 7 13 7 13s7-8.58 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
    </svg>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

const MapController = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 10);
    }
  }, [center, map]);
  return null;
};

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(
    locations.Baddi.coords
  );
  const [activeFacility, setActiveFacility] = useState("Baddi");

  const toggleFacility = (facility) => {
    setActiveFacility(facility);
    setSelectedLocation(locations[facility].coords);
  };

  return (
    <div
      className="relative border-2 border-x-0 xl:border-x-2 border-gray-300 z-0 flex flex-col md:flex-row h-auto md:h-[644px]  lg:h-[540px] xl:h-[508px] 2xl:h-[450px]
     w-full lg:max-w-[1100px] 2xl:max-w-[1400px] mx-auto mt-8 bg-gray-100 shadow-xl rounded-2xl overflow-hidden"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-[360px]  md:h-full relative p-6">
        <MapContainer
          center={[26, 80.5]}
          zoom={5.2}
          scrollWheelZoom={false}
          zoomControl={false}
          doubleClickZoom={false}
          attributionControl={false}
          dragging={false}
          className="w-full h-full rounded-2xl"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {Object.values(locations).map(({ coords, name }, index) => (
            <Marker
              key={index}
              position={coords}
              icon={createMarkerIcon(index === 0 ? "red" : "blue")}
            >
              <Popup
                autoOpen
                autoClose={false}
                closeOnClick={false}
                closeButton={false}
                className="font-semibold text-gray-800"
              >
                {name}
              </Popup>
            </Marker>
          ))}
          {selectedLocation && <MapController center={selectedLocation} />}
        </MapContainer>
      </div>

      {/* Right Side */}
      <div className="space-y-4 my-auto w-full md:w-1/2 p-6">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-black">
            At Bennet Pharmaceuticals, we deliver high-quality healthcare
            solutions through advanced manufacturing practices, with facilities
            designed to meet the highest standards of precision, safety, and
            innovation in every product.
          </p>
        </div>

        {["Baddi", "Vadodara"].map((facility) => (
          <div
            key={facility}
            className="bg-[#E5ECC9] rounded-lg p-6 cursor-pointer  "
            onClick={() => toggleFacility(facility)}
          >
            <h3 className="text-xl font-semibold mb-3">{facility}</h3>
            {activeFacility === facility && (
              <p className="text-black leading-relaxed">
                {facility === "Vadodara"
                  ? "Coming Soon"
                  : `Our ${facility} facility operates in line with WHO GMP for top-tier manufacturing excellence, maintains rigorous quality assurance adhering to strict regulatory guidelines, and delivers innovative healthcare solutions with advanced technology and cutting-edge machinery.`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
