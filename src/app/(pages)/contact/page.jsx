import ContactForm from "@/app/components/contact/ContactForm";
// import MaskedPath from "@/app/components/MaskedPath";
export default function Home() {
  return (
    <div className=" flex flex-col mt-10">
      <main className="flex-grow container mx-auto px-4 py-8 pb-14">
        <ContactForm />
      </main>

      {/*       
      <div className="p-10 ml-20">
        <MaskedPath />
      </div> */}
    </div>
  );
}
