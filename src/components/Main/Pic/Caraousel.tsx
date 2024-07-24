import React from "react";
import { Card, CardContent,CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { hackathons } from "@/lib/data";
import Image from "next/image";
interface hack {
    id: number;
    name: string;
    desc: string;
    image: string;
    desig: string;
  }
export default function CaraouselBig() {
    return (
        <Carousel className="w-full max-w-xs bg-green-300 rounded-xl">
          <CarouselContent className="rounded-xl">
            {hackathons.map((data, index) => (
              <CarouselItem key={index} >
                <div className="p-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>{data.name}</CardTitle>
                            <CardDescription>{data.desc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{data.desig}</p>
                            {data.name == 'AudioCraft Hackathon' ? ( <Image src={data.image} alt="skilss" width={260} height={240}/>) : ( <Image src={data.image} alt="skilss" width={150} height={150}/>)}
                           
                        </CardContent>
                    </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
}
