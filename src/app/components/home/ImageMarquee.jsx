import Image from "next/image";
import Marquee from "react-fast-marquee";

const ImageMarquee = () => {
  const images = [
    "/AboutUs.png",
    "/bennet.png",
    "/doctor.png",
    "/reward1.jpg",
    "/reward2.jpg",
    "/reward3.jpg",
  ];

  return (
    <div className="xl:container p-0 overflow-hidden mb-10">
      <Marquee speed={60} gradient={false}>
        <div className="flex space-x-6 py-4">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="w-[250px] h-[200px] md:w-[300px] md:h-[250px] lg:w-[500px] lg:h-[300px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`marquee-image-${i}`}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
