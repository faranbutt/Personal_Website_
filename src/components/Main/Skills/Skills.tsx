import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <div className="w-full flex h-[500px] ">
      <div className="w-1/2  flex justify-center items-center">
        <div>
          <Image src={"/skills2.png"} alt="computer" width={500} height={500} />
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="text-5xl text-green-800 w-full h-1/3  flex items-center">
          Skills
        </div>
        <div className="h-2/3  grid grid-cols-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image
                src={"/nextjs.png"}
                alt="nextjs"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image
                src={"/langchain.png"}
                alt="nextjs"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image
                src={"/python.png"}
                alt="nextjs"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image src={"/aws.webp"} alt="nextjs" width={100} height={100} />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image
                src={"/fastapi.webp"}
                alt="nextjs"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image
                src={"/nodejs.png"}
                alt="nextjs"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image
                src={"/docker.png"}
                alt="nextjs"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-green-200">
              <Image
                src={"/pytorch.png"}
                alt="nextjs"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
