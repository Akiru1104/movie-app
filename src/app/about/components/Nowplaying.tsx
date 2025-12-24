import NowPlayingCarousel from "./NowPlayingCarousel";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

const fetchFromNowPlaying = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
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

export default async function NowPlaying() {
  const nowPlayingMovies = await fetchFromNowPlaying();

  return (
    <div>
      <div className="font-semibold leading-8">Upcoming</div>

      <div className="mt-4">
        <NowPlayingCarousel movies={nowPlayingMovies} />
      </div>
    </div>
  );
}
