"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Movie = {
  id: number;
  title: string;
  release_date?: string;
  poster_path?: string | null;
  vote_average?: number;
};

type Props = {
  word: string;
  results: Movie[];
  onClose: () => void;
};

export default function SearchResultList({ word, results, onClose }: Props) {
  const router = useRouter();

  if (!word || results.length === 0) return null;

  return (
    <div className="absolute left-0 top-11 z-50 w-[440] rounded-md border bg-white shadow-lg">
      <ul className="max-h-[420] overflow-y-auto">
        {results.slice(0, 8).map((movie) => (
          <li
            key={movie.id}
            onClick={() => {
              router.push(`/movieDetail/${movie.id}`); 
              onClose();
            }}
            className="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-gray-100"
          >
            <div className="h-16 w-11 overflow-hidden rounded-md bg-gray-200">
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "/placeholder.png"
                }
                alt={movie.title}
                width={80}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-medium">{movie.title}</p>
              <p className="text-xs text-gray-500">
                {movie.release_date?.slice(0, 4) ?? "—"}
                {movie.vote_average
                  ? ` • ⭐ ${movie.vote_average.toFixed(1)}`
                  : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          router.push(`/search?query=${encodeURIComponent(word)}`);
          onClose();
        }}
        className="cursor-pointer border-t px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
      >
        See all results for “{word}”
      </div>
    </div>
  );
}
