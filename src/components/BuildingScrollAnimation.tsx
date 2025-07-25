"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function BuildingScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Experience the Emaar <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                luxury
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`https://media.sketchfab.com/models/c1d6f5884c9c4a56b8d8f9c5555f1902/thumbnails/cbb971fab14a48b093e8f77d7911f4b3/26442e6508a547d7b5aa11fdc70727b1.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
