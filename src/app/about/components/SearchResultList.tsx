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

  if (!word) return null;

  return (
    <div className="absolute left-0 top-full z-50 mt-2 w-[360] rounded-md border bg-white shadow-lg">
      <ul className="max-h-[360] overflow-y-auto">
        {results.slice(0, 5).map((movie) => (
          <li
            key={movie.id}
            onClick={() => {
              router.push(`/movie/${movie.id}`);
              onClose();
            }}
            className="flex cursor-pointer items-center justify-between gap-3 border-b px-4 py-3 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
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
                <p className="text-sm font-medium text-black">{movie.title}</p>

                <p className="text-xs text-gray-600">
                  {movie.vote_average !== undefined
                    ? `${movie.vote_average.toFixed(1)}/10`
                    : "—"}
                  <span className="mx-1">•</span>
                  {movie.release_date ? movie.release_date.slice(0, 4) : "—"}
                </p>
              </div>
            </div>

            <button className="text-xs text-gray-500">See more →</button>
          </li>
        ))}
      </ul>

      <button
        className="flex h-10 w-full items-center justify-center text-sm text-gray-600 hover:bg-gray-50"
        onClick={() => {
          router.push(`/search?query=${encodeURIComponent(word)}`);
          onClose();
        }}
      >
        See all results for “{word}”
      </button>
    </div>
  );
}
