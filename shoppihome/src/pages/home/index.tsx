import React from "react";
import Header from "@/components/Header";
import MainSearchComp from "@/components/searchboxComps/MainSearchComp";
import CardDemo from "@/components/shadcnComps/CardDemo";
import MostExpensive from "@/components/MostExpensive";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-7 bg-gray-100 pt-8">
        <div className="flex flex-col">
          <div className="grid grid-cols-8">
            <div className="col-start-3 col-end-7 mx-auto">
              <MainSearchComp />
            </div>
            <div className="ml-16 col-start-7">
              <CardDemo src="home1.png" alt="Bild på hem" title="Din senaste visning" />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-center p-4">Dyraste hemmen just nu</h2>
            <MostExpensive />
          </div>
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

export default Home;
