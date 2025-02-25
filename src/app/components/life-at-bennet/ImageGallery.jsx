// "use client";
// import { motion } from "framer-motion";
// import GalleryCard from "./GalleryCard";
// import { useState, useEffect } from "react";

// export default function ImageGallery() {
//   const galleryItems = [
//     {
//       images: [
//         "/learning1.jpg?height=400&width=full",
//         "/learning2.jpg?height=400&width=full",
//         "/learning3.jpg?height=400&width=full",
//         "/learning4.jpg?height=400&width=full",
//       ],
//       title: "Continuous Learning",
//       description:
//         "We invest in your professional development through mentorship and training programs.",
//     },
//     {
//       images: [
//         "/reward1.jpg?height=400&width=full",
//         "/reward2.jpg?height=400&width=full",
//         "/reward3.jpg?height=400&width=full",
//       ],
//       title: "Recognition and Rewards",
//       description:
//         "Your achievements are celebrated, and your contributions are valued.",
//     },
//     {
//       images: [
//         "/worklife1.jpg?height=400&width=full",
//         "/worklife2.jpg?height=400&width=full",
//         "/worklife3.jpg?height=400&width=full",
//       ],
//       title: "Work-Life Balance",
//       description:
//         "We believe in a healthy work-life harmony that empowers you to excel.",
//     },
//     {
//       images: [
//         "/strength1.jpg?height=400&width=full",
//         "/strength2.jpg?height=400&width=full",
//       ],
//       title: "Our Strength",
//       description:
//         "Your achievements are celebrated, and your contributions are valued.",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
//         {galleryItems.map((item, index) => (
//           <GalleryItemSlider key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function GalleryItemSlider({ item }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Automatically cycle through images every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [item.images.length]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: {
//           duration: 0.6,
//           ease: "easeOut",
//         },
//       }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       <GalleryCard
//         image={item.images[currentImageIndex]}
//         title={item.title}
//         description={item.description}
//       />
//     </motion.div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import { useState, useEffect } from "react";

export default function ImageGallery({ galleryItems }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {galleryItems.map((item, index) => (
          <GalleryItemSlider key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function GalleryItemSlider({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [item.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <GalleryCard
        image={item.images[currentImageIndex].image}
        title={item.title}
        description={item.description}
      />
    </motion.div>
  );
}
