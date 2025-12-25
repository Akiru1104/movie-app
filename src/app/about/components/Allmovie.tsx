import MovieCard from "./MovieCard";

const fetchFromUpComingMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results;
};

const fetchFromPopularMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results;
};

const fetchFromTopRatedMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      method: "GET",
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
  const upcomingMovies: Movie[] = await fetchFromUpComingMovieDB();
  const popularMovies: Movie[] = await fetchFromPopularMovieDB();
  const topRatedMovies: Movie[] = await fetchFromTopRatedMovieDB();

  return (
    <div>
      <div className="font-semibold leading-8">Upcomming</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {upcomingMovies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="font-semibold leading-8">Popular</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {popularMovies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="font-semibold leading-8">Top Rated</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {topRatedMovies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
