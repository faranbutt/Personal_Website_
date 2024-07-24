import React from "react";
import Stars from "./stars";
import Image from "next/image";
export default function CardReview({
  name,
  desc,
  image,
  desig,
}: {
  name: string;
  desc: string;
  image: string;
  desig: string;
}) {
  return (
    <div className="w-full h-full">
      <div className="h-1/6 w-full  p-2 ">
        <Stars />
      </div>
      <div className="h-3/6  w-full p-2">{desc}</div>
      <div className="bg-green-200 p-2 h-2/6 w-full  flex items-end gap-2">
        <div className="rounded-full  w-20 h-20 flex justify-center items-center overflow-hidden">
          <Image
            src={image}
            alt="profile-pic"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="gap-2">
          <div>{name}</div>
          <div className="text-sm">{desig}</div>
        </div>
      </div>
    </div>
  );
}
