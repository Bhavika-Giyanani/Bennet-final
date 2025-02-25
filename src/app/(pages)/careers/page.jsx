"use client";
import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getCareersPage } from "@/sanity/lib/queries";
export default function CareersPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  const [heroImage, setHeroImage] = useState("");
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCareersPage();
      setHeroImage(data?.herosection?.image || "/pills.png");
      setSliderImages(data?.contactImageSlider || []);
    }
    fetchData();
  }, []);
  // Array of images for the slider
  // const contactImages = [
  //   "/GroupPhoto1.jpg",
  //   "/GroupPhoto2.jpg",
  //   "/GroupPhoto3.jpg",
  // ];
  console.log(sliderImages);
  return (
    <div className="min-h-screen flex flex-col max-w-[1440px] mx-auto px-0">
      <main className="flex-grow">
        {/* Home */}
        <div className="lg:px-2">
          <HeroSection
            imageLink={heroImage}
            moldLink="/careermold.png"
            title='<span>Empowering</span>
                  <br />
                  <div>
                   People,
                      <p className="flex md:absolute md:z-40 md:-mt-[4.3rem] md:ml-[16rem] lg:-mt-[6rem]  lg:ml-[21rem]">Shaping </p>
                  </div>
                  <span className="text-[#9DC41A] mt-8 ">Healthcare&apos;s</span>
                  <br />
                  <span>Future</span>'
            description="Empowering Growth, Celebrating Success"
            showKnowMoreButton={false}
          />
        </div>

        {/* Career Banner */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="container w-[100%] mx-auto px-4 mt-12 py-6 flex justify-center align-middle bg-black text-white lg:rounded-2xl">
            <div className="w-[100%] flex flex-col lg:flex-row justify-center items-center lg:gap-5">
              <h2 className="text-4xl text-center align-middle text-[#9DC41A] lg:text-6xl font-bold mb-4 lg:w-1/3">
                <p></p>
                Careers
              </h2>
              <p className="text-white text-lg lg:text-2xl lg:w-2/3">
                At Bennet, we recognize that our greatest asset is our people.
                Their dedication, passion, and expertise drive our success.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <section className="py-12 bg-white">
          <div className="container w-[100%] mx-auto px-4">
            <div className="my-12">
              <motion.h2
                className="text-4xl lg:text-7xl font-bold mb-6 flex flex-wrap lg:max-w-[64rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {[
                  "Together,",
                  "we",
                  "are",
                  "shaping",
                  "a",
                  "stronger",
                  "and",
                  "brighter",
                  "future",
                  "in",
                  "healthcare.",
                ].map((word, index) => (
                  <motion.span
                    key={index}
                    className="mr-2"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
          </div>
        </section>

        {/* Contact Section with Slider */}
        <motion.section
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="container flex flex-col justify-center items-center max-w-[1440px] mx-auto px-4">
            {/* Image Slider */}
            <ContactImageSlider
              images={sliderImages.map((img) => img.image)}
              fadeInUp={fadeInUp}
            />

            {/* Contact Details */}
            <motion.div
              className="relative bottom-[5vh] p-5 w-[85vw] md:w-[85vw] lg:w-[75vw] xl:w-[80vw] 2xl:w-[55vw] max-w-[1410px] bg-[#D7E48E] mx-auto text-center rounded-3xl space-y-6"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Join our wonderful teams and be part of a community where your
                growth is our priority!
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold">
                To apply, send your resume to
              </h3>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="flex items-center justify-center gap-2">
                  <span className="font-medium text-lg">Email:</span>
                  <a
                    href="mailto:jobs.bennet@gmail.com"
                    className="hover:text-[#9DC41A] text-lg"
                  >
                    Jobs.bennet@gmail.com
                  </a>
                </p>
                <p className="text-lg">Or connect with us via WhatsApp</p>
                <p className="font-medium text-lg"> (+91) 9825519537</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

// Contact Image Slider Component
function ContactImageSlider({ images, fadeInUp }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <motion.div
      className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg"
      variants={fadeInUp} // Use fadeInUp passed as a prop
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        src={images[currentImageIndex]} // Dynamic image source
        alt="Team Meeting"
        fill
        className="object-cover rounded-lg max-w-[1480px]"
      />
    </motion.div>
  );
}
