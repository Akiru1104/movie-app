import { Link } from "lucide-react";
import React from "react";
import { MovieCard } from "@/app/about/components/MovieCard";

export const SeeMoreButton = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold ">SeeMoreButton</h1>
        <Link href="/category/upcoming">
          <button className="text-sm mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            See More
          </button>
        </Link>
        {MovieCard.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
