import SecondarySearchComp from "@/components/searchboxComps/SecondarySearchComp";
import Header from "@/components/Header";
import { CarouselDemo } from "@/components/shadcnComps/CarouselDemo";
import Listings from "@/components/listings/Listings";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 bg-gray-100">
        <div className="flex">
          <SecondarySearchComp />
          <CarouselDemo />
        </div>
        <div className="w-full mt-12">
          <Listings />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
