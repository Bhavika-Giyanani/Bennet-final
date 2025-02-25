"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/app/components/HeroSection";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { getManufacturingPage } from "@/sanity/lib/queries";

const DynamicWorldMap = dynamic(() => import("../../components/worldMap"), {
  ssr: false,
});

export default function Manufacturing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //^ sanity code for fetching hero section's image
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await getManufacturingPage();
      setHeroImage(data?.image || "/pills.png"); // Fallback if no image
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen ">
      {/* HeroSection*/}
      <div className="px-4">
        <HeroSection
          imageLink={heroImage}
          moldLink="/manufacturingmold.png"
          title='Empowering lives and <span className="text-[#9DC41A]">affordability</span>'
          description="Where excellence meets accessibility"
          showKnowMoreButton={true}
        />
      </div>

      {/* Excellence Section */}
      <section className="container mx-auto px-4 relative mt-12">
        <motion.div
          className="border border-[#2C3D5A] bg-[#D9D9D980] p-6 md:p-8 lg:p-16 rounded-3xl shadow-sm mx-auto relative z-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="text-black">
            <div className="relative flex justify-center items-center">
              {/* Background Molecule */}
              <div className="absolute -top-10 md:-top-14 left-1/2 transform -translate-x-1/2 scale-90 md:scale-100 z-0">
                <img
                  src="/GreenMolecule.png"
                  alt="Green Molecule"
                  className="h-60  w-72  mt-10 sm:w-48 sm:h-48 sm:mt-4  md:mt-10 lg:mt-2 md:h-60 md:w-60 xl:h-60 xl:w-60  opacity-80 mix-blend-multiply"
                />
              </div>

              {/* Title */}
              <motion.h2
                className="text-2xl md:text-4xl font-bold mb-4 text-center relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Where excellence meets accessibility
              </motion.h2>
            </div>

            <motion.div
              className="text-center md:px-36"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.3,
              }}
            >
              <motion.p>
                <motion.span>
                  At Bennet Pharmaceuticals, we believe in delivering
                  high-quality healthcare solutions through advanced
                  manufacturing practices.
                </motion.span>
                <br />
                <br />
                <motion.span>
                  Our facilities are designed to meet the highest standards of
                  excellence, ensuring precision, safety, and innovation in
                  every product.
                </motion.span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          {isLargeScreen ? (
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14 overflow-hidden"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                State-of-the-Art Manufacturing at Baddi
              </motion.h2>
              <motion.div
                className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <hr className="border-t-2 border-[#AECA1D]" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                State-of-the-Art Manufacturing at Baddi
              </motion.h2>
              <motion.div
                className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <hr className="border-t-2 border-[#AECA1D]" />
              </motion.div>
            </motion.div>
          )}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Global Standards Compliance",
                description:
                  "Our Baddi facility operates in line with WHO GMP, ensuring top-tier manufacturing excellence.",
              },
              {
                title: "Uncompromising Quality Control",
                description:
                  "We maintain a rigorous quality assurance system, adhering to strict regulatory guidelines for every product.",
              },
              {
                title: "Advanced Technologies",
                description:
                  "Equipped with cutting-edge machinery and precise instrumentation, we deliver healthcare solutions of exceptional Innovation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/90 text-white p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <h3 className="text-xl max-w-[16rem] mx-auto px-0 lg:text-3xl font-semibold mb-3 text-[#B5CE32]">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Network */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Title */}
          {isLargeScreen ? (
            <motion.div
              className="flex justify-start md:gap-0 lg:gap-0 items-center my-10 mb-14 overflow-hidden"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-full md:w-[60%] lg:w-[55%] 2xl:w-[45%] text-start text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                Our Manufacturing Network
              </motion.h2>

              <motion.div
                className="w-0 text-left md:w-[40%] lg:w-[45%] 2xl:w-[55%] mt-2"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <hr className="border-t-2 border-[#AECA1D]" />
              </motion.div>
            </motion.div>
          ) : (
            // For smaller screens
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-full md:w-[20%] lg:w-[25%] 2xl:w-[45%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                Our Manufacturing Network
              </motion.h2>

              <div className="w-full  mt-2">
                <hr className="border-t-2 border-[#AECA1D]" />
              </div>
            </motion.div>
          )}

          <motion.h3
            className="text-2xl md:max-w-[60rem]  md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:leading-[4.5rem] xl:leading-[5.714rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
          >
            {[
              "Experience the",
              " BENNET",
              " difference in",
              " every",
              " product.",
            ].map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 * index,
                }}
                className={text === " BENNET" ? "text-[#b4d335]" : ""}
              >
                {text}
              </motion.span>
            ))}
          </motion.h3>

          {/* Map */}
          <div className="-ml-10 ">
            <DynamicWorldMap />
          </div>
        </div>
      </section>

      {/* Contract Manufacturing */}
      <motion.section
        className="py-16 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 relative">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl lg:leading-[4.5rem] xl:leading-[5.714rem] font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amout: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Contract <span className="text-[#2C3D5A]">Manufacturing</span>
          </motion.h2>
          <div>
            <motion.p
              className="text-[#525354] text-xl lg:text-2xl mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amout: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At Bennet Quality Assurance and Quality Control are given
              paramount importance, quality assurance system harmonise and
              simply cGMP process to ensure sustainable quality.
            </motion.p>
            <br />
            <br />
            <motion.p
              className="lg:text-xl mb-4 lg:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              At Bennet Pharmaceuticals, we specialize in contract manufacturing
              of finished formulations, including tablets, capsules, liquid
              orals, soft gels, and bi-layered and sustained-release
              preparations.
            </motion.p>
            <br />
            <br />

            <motion.hr
              className="border-t-2 border-[#AECA1D]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            <br />
            <br />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:text-xl "
            >
              All of our products are manufactured at a facility that adheres to
              WHO-GMP compliance, ensuring that we meet the highest
              international standards across all therapeutic segments.
            </motion.p>
            <br />
            <br />

            <motion.hr
              className="border-t-2 border-[#AECA1D]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <br />
            <br />

            <motion.p
              className="lg:text-xl "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              This commitment to quality enables us to consistently deliver
              excellence in healthcare solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="mx-auto mt-12 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container bg-[#D7E48E] mx-auto px-2 md:px-4 py-6 rounded-2xl">
          <div className="flex flex-col  md:gap-12 md:flex-row items-center md:justify-between">
            <div className="md:w-2/5 xl:w-[42%] w-full text-center md:text-left">
              <h3 className="font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl mb-2">
                To know more about us Contact at
              </h3>
            </div>
            <div className="md:w-3/5 xl:w-[58%] w-full text-center md:text-left text-lg lg:text-2xl">
              <p>Email: cm@bennetpharmaceuticals.com</p>
              <p>Call: (+91) 8650107111</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Export Title */}
      <motion.div
        className="flex container justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-8 md:my-10 mb-10 md:mb-14 overflow-hidden"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.9 }}
      >
        <motion.h2
          className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl my-8 sm:text-5xl md:text-6xl xl:text-7xl font-bold text-stroke-black"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          EXPORTS
        </motion.h2>
        <motion.div
          className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <hr className="border-t-2 border-[#AECA1D]" />
        </motion.div>
      </motion.div>

      {/* Global HealthCare */}
      <div className="w-full mt-12  ">
        <div className="bg-white my-10">
          {/* Hero Section */}
          <section className="relative  overflow-hidden  container mx-auto rounded-2xl ">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=2070&auto=format&fit=crop"
                alt="Pharmaceutical Export"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(215, 228, 142, 0.95) 10%, rgba(215, 228, 142, 0.8) 10%)",
                }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 rounded-2xl">
              <div className="h-full flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-7xl font-bold text-white leading-tight">
                        Advancing Global Healthcare
                      </h1>
                      <div className="w-24 h-2 bg-white rounded-full" />
                      <p className="text-3xl font-light text-white/90">
                        Delivering excellence across continents
                      </p>
                    </div>
                  </div>

                  <div className="transform md:-translate-x-2">
                    <p className="text-gray-800 text-xl leading-relaxed">
                      Our commitment to global healthcare extends beyond
                      borders. Bennet Pharmaceuticals exports top-tier
                      pharmaceutical products to Asia, Africa, and Latin
                      America, contributing to global health advancements and
                      ensuring accessibility worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Black Card */}
      <div className="container mx-auto mb-10">
        <motion.div
          className="bg-black text-white text-center py-6 px-4 lg:p-12 lg:px-32 lg:rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <p className="mb-4 text-xl md:text-4xl md:pb-6 font-semibold">
            We are open to <span className="text-[#9FB81D]">collaborative</span>{" "}
            association for all kinds of product inquiries.
          </p>
          <div className="text-sm md:text-xl">
            <p>Email: Export@bennetpharmaceuticals.com</p>
            <p>Call: (+91)9625102437</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
