"use client";

import React from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";

type PropertyCard = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const properties: PropertyCard[] = [
  {
    title: "Skyline Heights",
    description:
      "Live at the peak of comfort — 4BHK residences with panoramic city views and private sky gardens.",
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Altura One",
    description:
      "Contemporary high-rise homes with infinity pools, co-working spaces, and fine dining on the 45th floor.",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

export function NewLaunchesGrid() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-y-10 gap-x-6 pt-10 md:pt-16 px-4">
      {properties.map((property, index) => (
        <PinContainer key={index} title="EMAAR" href={property.link}>
          <div className="flex flex-col p-4 tracking-tight text-slate-100/80 w-[20rem] h-[26rem]">
            <h3 className="pb-2 m-0 font-bold text-lg text-zinc-700 dark:text-slate-100">
              {property.title}
            </h3>
            <p className="text-sm m-0 p-0 font-normal text-slate-600 dark:text-slate-100">
              {property.description}
            </p>

            {/* Image Container */}
            <div className="relative flex-1 w-full mt-4 rounded-lg overflow-hidden">
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
