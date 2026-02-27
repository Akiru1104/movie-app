import Link from "next/link";

const IMG_BASE = "https://image.tmdb.org/t/p";

type SimilarMovie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};

type Props = {
  movies: SimilarMovie[];
  genreIds?: number[];
};

export default function SimilarMovies({ movies, genreIds = [] }: Props) {
  if (!movies || movies.length === 0) return null;

  const seeMoreHref =
    genreIds.length > 0 ? `/genre?ids=${genreIds.join(",")}` : "/genre";

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">More like this</h2>
        <Link
          href={seeMoreHref}
          className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
        >
          See more →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {movies.slice(0, 5).map((m) => (
          <Link key={m.id} href={`/movieDetail/${m.id}`} className="group">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              {m.poster_path ? (
                <img
                  src={`${IMG_BASE}/w300${m.poster_path}`}
                  alt={m.title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-xs text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <div className="mt-1 px-1">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span className="text-yellow-400">★</span>
                <span>{m.vote_average.toFixed(1)}</span>
                <span className="text-gray-300">/10</span>
              </div>
              <p className="text-sm font-medium text-gray-800 truncate">
                {m.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
