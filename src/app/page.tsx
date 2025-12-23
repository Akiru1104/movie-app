"use client";

import { Header } from "@/app/components/Header";

// import { Upcomming } from "@/app/about/components/Upcomming";

export default function Home() {
  return (
    <div>
      <Header />

      <Center />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.title}
            className="bg-pink-300 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
              <p className="text-white font-bold">Rating: {movie.raiting}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Upcomming /> */}
    </div>
  );
}
export type { Movie };
