import HeroSection from "@/app/components/HeroSection";
import ImageGallery from "@/app/components/life-at-bennet/ImageGallery";
import Testimonial from "@/app/components/life-at-bennet/Testimonial";
import { getLifeAtBennetPage } from "@/sanity/lib/queries";
import AnimatedText from "@/app/components/life-at-bennet/AnimatedText"; // Move Framer Motion here

export default async function LifeAtBennet() {
  const data = await getLifeAtBennetPage();
  if (!data) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col mx-auto">
      <div className="lg:px-4">
        <HeroSection
          imageLink={data.herosection.image}
          moldLink="/lifemold.png"
          title='Empowering <span className="text-[#9DC41A]">Growth</span>,<br />Celebrating <span className="text-[#9DC41A]">Success</span>'
          description="Together We Thrive, Together We Succeed"
          showKnowMoreButton={false}
        />
      </div>

      <section>
        <div className="container w-[100%] mx-auto px-4 py-12 text-3xl md:text-4xl font-bold">
          <AnimatedText text="We're committed to fostering an environment where you can thrive, grow, and reach your full potential." />
        </div>
        <ImageGallery galleryItems={data.imagegallerysection} />
      </section>

      <Testimonial testimonials={data.testimonialsection} />
    </div>
  );
}
