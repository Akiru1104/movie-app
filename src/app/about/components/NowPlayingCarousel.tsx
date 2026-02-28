"use client";

import CarouselMovieContent from "./Carousel";
import TrailerModal from "@/app/about/components/TrailerModal.tsx";
import { getMovieTrailer } from "@/lib/getMovieTrailer";
import { Movie } from "../../../index";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

export default function NowPlayingCarousel({ movies }: { movies: Movie[] }) {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleWatchTrailer = async (movieId: number) => {
    setLoading(true);
    setVideoId(null);
    setOpen(true);

    try {
      const key = await getMovieTrailer(movieId);
      setVideoId(key);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="group relative transition-all duration-300 hover:shadow-lg">
                <CarouselMovieContent
                  movie={movie}
                  onWatchTrailer={() => handleWatchTrailer(movie.id)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 h-10 w-10 bg-black/40 text-white hover:bg-black/60" />
        <CarouselNext className="right-2 h-10 w-10 bg-black/40 text-white hover:bg-black/60" />
      </Carousel>

      <TrailerModal
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) setVideoId(null);
        }}
        videoId={videoId}
      />

      {open && loading && (
        <div className="fixed inset-0 z-50 grid place-items-center">
          <div className="rounded-md bg-black/70 px-4 py-2 text-white text-sm">
            Loading trailer...
          </div>
        </div>
      )}
    </div>
  );
}
