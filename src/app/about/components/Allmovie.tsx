import MovieCard from "./MovieCard";
import Link from "next/link";

export const fetchFromUpComingMovieDB = async (category: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results;
};

export const fetchFromPopularMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results;
};

export const fetchFromTopRatedMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results;
};

export default async function Allmovie() {
  const upcomingMovies: Movie[] = await fetchFromUpComingMovieDB("upcoming");
  const popularMovies: Movie[] = await fetchFromPopularMovieDB("popular");
  const topRatedMovies: Movie[] = await fetchFromTopRatedMovieDB("top_rated");

  return (
    <div>
      <div>
        <div className="flex ">
          <div className="font-semibold leading-8">Upcoming</div>
          <Link href="/category/upcoming">
            <button>See more</button>
          </Link>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {upcomingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      {/* <div>
        <div className="font-semibold leading-8">Popular</div>
        <Link href="/category/popular">
          <button>Popular</button>
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div>
        <div className="font-semibold leading-8">Top Rated</div>
        <Link href="/category/top-rated">
          <button>Top Rated</button>
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
