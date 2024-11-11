import CardExpensive from "./shadcnComps/CardExpensive";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "react-responsive";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MostExpensive() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      {isMobile ? (
        <Carousel className="w-screen mx-auto max-w-md">
          <CarouselContent>
            <CarouselItem key={3}>
              <CardExpensive src="home1.png" alt="inget" title="Dyrt hus" />
            </CarouselItem>
            <CarouselItem key={2}>
              <CardExpensive src="apart.png" alt="not" title="Dyrt hus" />
            </CarouselItem>
            <CarouselItem key={1}>
              <CardExpensive src="home1.png" alt="inget" title="Dyrt hus" />
            </CarouselItem>
            <CarouselItem key={4}>
              <CardExpensive src="apart.png" alt="not" title="Dyrt hus" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className="flex md:overflow-auto md:flex-row space-y-16 md:space-y-0 justify-center md:space-x-16 mt-4 mb-6">
          <CardExpensive src="home1.png" alt="inget" title="Dyrt hus" />
          <CardExpensive src="apart.png" alt="not" title="Dyrt hus" />
          <CardExpensive src="home1.png" alt="inget" title="Dyrt hus" />
          <CardExpensive src="apart.png" alt="not" title="Dyrt hus" />
        </div>
      )}
    </>
  );
}
