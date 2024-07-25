import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full h-[500px] ">
      <div className="">
      <div className="w-full p-10 text-green-800 text-5xl">Get in Touch</div>
      <div className="w-full h-full flex">
        <div className=" w-1/2">
          <div className="w-full h-1/6  flex">
            <div className="w-1/2 flex justify-center items-center p-10">
              <Input type="text" placeholder="First Name" className="" />
            </div>
            <div className="w-1/2 flex justify-center items-center p-10">
              <Input type="text" placeholder="Last Name" className="" />
            </div>
          </div>
          <div className="w-full h-1/6  flex">
            <div className="w-1/2 flex justify-center items-center p-10">
              <Input type="email" placeholder="Email" className="" />
            </div>
            <div className="w-1/2 flex justify-center items-center p-10">
              <Input type="number" placeholder="Phone Number" className="" />
            </div>
          </div>
          <div className="h-1/6 flex justify-center items-center px-9">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select a Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Web Development</SelectItem>
                <SelectItem value="light">Mobile App Development</SelectItem>
                <SelectItem value="dark">AI Development</SelectItem>
                <SelectItem value="system">Backend Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-2/6  flex justify-center items-center px-9">
            <Textarea placeholder="Type your message here." />
          </div>
          <div className="h-1/6 text-gray-400">
            <div className="h-1/3 w-full  pt-2 pl-10">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>
            <div className="h-2/3 w-full flex justify-center items-center">
                  <Button className="bg-green-400">Submit</Button>
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex justify-center items-center ">
          <Image src={"/hi3.jpg"} alt="hi" width={400} height={400} />
        </div>
      </div>
      </div>

    </div>
  );
}
