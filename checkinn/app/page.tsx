"use client";
import SearchForm from "@/components/ui/SearchForm";
import { trendingData } from "@/data/trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#031a09] via-[#316c40] to-[#294e28] text-white">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl ">Unlock Your Next Stay</h2>
        <h3 className="py-5 text-xl">
          Find great deals on hotels, homes, and more...
        </h3>
      </section>

      <section className="mt-0 m-4 -mb-14 lg:px-4">
        {/* Search Form */}

        <SearchForm />
      </section>

      <section className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-t-lg  text-mainGreen">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Popular Getaways</h3>
          <p className="font-light">Globally loved travel hotspots</p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trendingData.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <Image
                src={item.src}
                key={item.id}
                alt={item.title}
                className="w-80 h-72 object-cover rounded-lg pb-2"
              />
              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
