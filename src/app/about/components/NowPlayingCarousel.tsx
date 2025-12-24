"use client";

import MovieCard from "./MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export default function NowPlayingCarousel({ movies }: { movies: Movie[] }) {
  return (
    <div className="relative">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-3">
          {movies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="group relative transition-all duration-300 hover:z-20 hover:scale-[1.08]">
                <MovieCard movie={movie} />
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
