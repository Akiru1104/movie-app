import React from "react";

import MovieCard from "./MovieCard";
import Link from "next/link";

export const fetchMoviesFromTMDB = async (category: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results ?? [];
};

export default async function Allmovie() {
  const upcomingMovies: Movie[] = await fetchMoviesFromTMDB("upcoming");
  const popularMovies: Movie[] = await fetchMoviesFromTMDB("popular");
  const topRatedMovies: Movie[] = await fetchMoviesFromTMDB("top_rated");

  const Section = ({
    title,
    category,
    movies,
  }: {
    title: string;
    category: string;
    movies: Movie[];
  }) => (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        <div className="font-semibold leading-8">{title}</div>
        <Link href={`/category/${category}`}>
          <button>See more</button>
        </Link>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Section title="Upcoming" category="upcoming" movies={upcomingMovies} />
      <Section title="Popular" category="popular" movies={popularMovies} />
      <Section title="Top Rated" category="top_rated" movies={topRatedMovies} />
    </div>
  );
}
