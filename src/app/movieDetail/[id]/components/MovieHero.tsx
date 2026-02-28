"use client";

import { useState } from "react";

const IMG_BASE = "https://image.tmdb.org/t/p";

type Trailer = {
  key: string;
  name: string;
};

type Props = {
  posterPath: string | null;
  backdropPath: string | null;
  trailer: Trailer | undefined;
};

export default function MovieHero({ posterPath, backdropPath, trailer }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start">
      {/* Poster */}
      <div className="flex-shrink-0 w-full md:w-72.5 rounded-lg overflow-hidden">
        {posterPath ? (
          <img
            src={`${IMG_BASE}/w500${posterPath}`}
            alt="poster"
            className="w-full h-72 md:h-107 object-cover"
          />
        ) : (
          <div className="w-full h-72 md:h-107 bg-gray-200 flex items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Trailer */}
      <div className="relative w-full md:w-190 rounded-lg overflow-hidden bg-black">
        {playing && trailer ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              className="w-full h-56 md:h-107"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setPlaying(false)}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            {backdropPath && (
              <img
                src={`${IMG_BASE}/w1280${backdropPath}`}
                alt="backdrop"
                className="w-full h-56 md:h-107 object-cover opacity-80"
              />
            )}
            {trailer && (
              <button
                onClick={() => setPlaying(true)}
                className="absolute bottom-4 left-4"
              >
                <div className="flex items-center gap-2 bg-black/60 hover:bg-black/80 transition text-white px-5 py-3 rounded-full text-sm font-medium">
                  <span className="text-lg">▶</span>
                  Play trailer
                </div>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
