"use client";

import CarouselMovieContent from "./Carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function NowPlayingCarousel({ movies }: { movies: Movie[] }) {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="relative">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="group relative transition-all duration-300 hover:z-20 hover:scale-[1.08]">
                <CarouselMovieContent movie={movie} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 h-10 w-10 bg-black/40 text-white hover:bg-black/60" />
        <CarouselNext className="right-2 h-10 w-10 bg-black/40 text-white hover:bg-black/60" />
      </Carousel>
    </div>
  );
}
