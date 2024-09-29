import * as React from "react";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="mx-auto max-w-md"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <h2 className="text-2xl text-gray-900 text-center p-4">Populära bostäder</h2>
              <Card className=" w-96 mx-auto rounded-sm hover:cursor-pointer hover:shadow-lg">
                <CardHeader className="p-3">
                  <CardTitle className="text-center">Bankgatan 7 Sorsele</CardTitle>
                </CardHeader>
                <CardContent className="flex h-full items-center justify-center m-0 p-0">
                  <img src="apart.png" alt="" className="rounded-b-sm" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
