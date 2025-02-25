// app/careers/CareersPage.jsx (Server Component)
import { getCareersPage } from "@/sanity/lib/queries";
import CareersClientComponent from "./page"; // Import the Client Component

export default async function CareersPage() {
  // Fetch data in the Server Component
  const careersData = await getCareersPage();
  const heroImage = careersData?.herosection?.image || "/pills.png";
  const sliderImages = careersData?.contactImageSlider || [];

  // Pass data to the Client Component
  return (
    <CareersClientComponent heroImage={heroImage} sliderImages={sliderImages} />
  );
}
