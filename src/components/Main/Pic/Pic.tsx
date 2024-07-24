import React from "react";
import Image from "next/image";
import CaraouselBig from "./Caraousel";
export default function Pic() {
  return (
    <div className="flex w-full h-[500px]">
      <div className="w-1/2 ">
        <div className="w-full h-1/4 p-10 text-5xl text-green-800">
          Hackathons
        </div>
        <div className="w-full h-3/4 flex justify-center items-center">
          <CaraouselBig />
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-green-200 rounded-full w-[400px] h-[400px] flex justify-center items-center overflow-hidden p-2">
          <Image
            src={"/coding.jpg"}
            alt="coding"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}