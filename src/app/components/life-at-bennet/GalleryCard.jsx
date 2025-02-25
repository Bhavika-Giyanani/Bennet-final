import Image from "next/image";

export default function GalleryCard({ image, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl custom-gallery-card-box-shadow transform transition-transform hover:scale-105 flex flex-col h-[90%]">
      <div className="aspect-square relative w-full mb-3 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-xs">{description}</p>
    </div>
  );
}
