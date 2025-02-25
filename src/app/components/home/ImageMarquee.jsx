import Image from "next/image";
import Marquee from "react-fast-marquee";

const ImageMarquee = () => {
  const images = [
    "/career-img-2.png",
    "/GroupPhoto1.jpg",
    "/GroupPhoto2.jpg",
    "/GroupPhoto3.jpg",
    "/learning.png",
    "/learning1.jpg",
    "/learning2.jpg",
    "/learning3.jpg",
    "/learning4.jpg",
    "/meeting.png",
    "/reward1.jpg",
    "/reward2.jpg",
    "/reward3.jpg",
    "/reward4.png",
    "/strength.png",
    "/strength1.jpg",
    "/strength2.jpg",
    "/worklife1.jpg",
    "/worklife2.jpg",
    "/worklife3.jpg",
    "/worklife4.png",
  ];

  return (
    <div className="xl:container p-0 overflow-hidden mb-10">
      <Marquee speed={50} gradient={false}>
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
