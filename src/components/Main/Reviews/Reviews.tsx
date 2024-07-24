import React from "react";
import { reviews } from "@/lib/data";
interface dat {
  id: number;
  name: string;
  desc: string;
  image: string;
  desig: string;
}

import CardReview from "./CardReview";
export default function Reviews() {
  return (
    <div className="w-full h-[450px] bg-green-50">
      <div className="h-1/4 text-5xl text-green-800 pl-10 pt-10">Reviews</div>
      <div className="h-3/4 grid grid-cols-4 pl-10 gap-2">
        {reviews.map((data: dat) => (
          <div
            key={data.id}
            className="rounded-xl border-2 border-green-800 w-[300px] h-[300px]"
          >
            <CardReview
              name={data.name}
              desc={data.desc}
              image={data.image}
              desig={data.desig}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
