"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const neighbourhoods = [
  {
    name: "Dubai Hills Estate",
    description: "A premium master-planned community with golf-course villas, lush parks, retail and Dubai Hills Mall nearby.",
    imageIndex: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
  {
    name: "Dubai Creek Harbour",
    description: "Waterfront living with creek views, sustainable planning and skyline vistas near new Dubai Creek Tower.",
    imageIndex: 1,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
  {
    name: "The Valley (Nima & Rivera)",
    description: "Family‑focused townhouses in a green community with sports trails, farmers' market & golden beach.",
    imageIndex: 2,
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
];

export function NeighborhoodCard({ neighborhood }) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {neighborhood.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm sm:text-base mt-2 text-left dark:text-neutral-300 leading-relaxed"
        >
          {neighborhood.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={neighborhood.image}
            height="400"
            width="800"
            className="h-48 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
            alt={`${neighborhood.name} - Premium Emaar Community`}
            loading="lazy"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-12 sm:mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={neighborhood.link}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white hover:text-primary transition-colors"
          >
            Explore →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-3 sm:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Learn More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function FeaturedCommunities3DCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6">
      {neighbourhoods.map((neighborhood, index) => (
        <div
          key={neighborhood.name}
          className="w-full flex justify-center"
        >
          <NeighborhoodCard neighborhood={neighborhood} />
        </div>
      ))}
    </div>
  );
}

// Alternative single card component if you need to use individually
export function SingleNeighborhoodCard({ neighborhood }) {
  if (!neighborhood) {
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <NeighborhoodCard neighborhood={neighborhood} />
    </div>
  );
}

// Hook for getting neighborhood data
export function useNeighborhoods() {
  return neighbourhoods;
}