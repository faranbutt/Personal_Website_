import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Main/Footer/Footer";
export default function Resume() {
  return (
    <div className="w-full h-full">
      <div className="w-full pl-10 text-5xl text-green-800">Resume</div>
      <div className="flex items-center justify-center py-20">
        <Link
          href={
            "/Faran_s_Resume-2.pdf"
          }
          title=""
          download={true}
        >
          <Button className="bg-green-400">Download Resume</Button>
        </Link>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={"/resume.jpg"}
          alt="resume"
          width={600}
          height={500}
          className="shadow-lg shadow-green-400 border-4 border-emerald-300"
        />
      </div>
      <div className="flex justify-end mt-10">
            <Footer />
          </div>
    </div>
  );
}
