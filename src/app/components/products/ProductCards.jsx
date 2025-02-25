"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

const ProductCards = ({ data }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const cards = document.querySelectorAll(".card-container");
      const isClickInsideCard = Array.from(cards).some((card) =>
        card.contains(event.target)
      );

      if (!isClickInsideCard) {
        setActiveSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const renderProductCards = (categoryIndex) => {
    const category = data.categories[categoryIndex];
    return category.productData.map((product, index) => (
      <motion.div
        key={index}
        className="w-[220px] bg-[#AECA1DE5] px-6 py-4 rounded-lg text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      >
        <p className="font-bold">
          {product.name}{" "}
          <span className="text-[#929FAE]">{product.dosage}</span>
        </p>
      </motion.div>
    ));
  };

  const renderRow = (startIndex, endIndex) => {
    return data.categories
      .slice(startIndex, endIndex)
      .map((section, sectionIndex) => {
        const actualIndex = startIndex + sectionIndex;
        return (
          <div
            key={actualIndex}
            className="bg-[#ECECECB2] rounded-xl p-4 cursor-pointer card-container"
            onClick={() => toggleSection(actualIndex)}
          >
            <div className="flex items-center justify-between">
              <p className="font-bold">{section.categoryName}</p>
              <motion.button
                className="bg-[#AECA1DE5] rounded-full px-3 py-2 flex items-center justify-center"
                animate={{ rotate: activeSection === actualIndex ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                aria-label={`Toggle ${section.categoryName} products`}
              >
                {activeSection === actualIndex ? (
                  <FaChevronLeft size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </motion.button>
            </div>

            {isSmallScreen && activeSection === actualIndex && (
              <motion.div
                className="col-span-full bg-[#ECECECB2] rounded-xl mt-4 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="overflow-x-auto scrollbar-hide"
                  style={{ maxHeight: "400px" }}
                >
                  <div className="grid grid-rows-3 auto-cols-max grid-flow-col gap-4 p-4">
                    {renderProductCards(actualIndex)}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        );
      });
  };

  const renderExpandedContent = (startIndex, endIndex) => {
    if (
      !isSmallScreen &&
      activeSection !== null &&
      activeSection >= startIndex &&
      activeSection < endIndex
    ) {
      return (
        <motion.div
          className="col-span-full bg-[#ECECECB2] rounded-xl p-4 my-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ maxHeight: "400px" }}
          >
            <div className="grid grid-rows-3 auto-cols-max grid-flow-col gap-4">
              {renderProductCards(activeSection)}
            </div>
          </div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <section
      className="my-8 mb-12 px-4 md:px-8 max-w-[1440px] mx-auto"
      id="Ourproducts"
    >
      <motion.div
        className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-8 md:my-10 mb-10 md:mb-14 overflow-hidden"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.9 }}
      >
        <motion.h2
          className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          OUR PRODUCTS
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

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {renderRow(0, 3)}
      </div>
      {renderExpandedContent(0, 3)}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {renderRow(3, 6)}
      </div>
      {renderExpandedContent(3, 6)}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {renderRow(6, 9)}
      </div>
      {renderExpandedContent(6, 9)}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProductCards;
