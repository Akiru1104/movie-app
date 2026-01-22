type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  runtime: number;
  vote_average: number;
  genres: { id: number; name: string }[];
};

type CreditsResponse = {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
};

type SimilarResponse = {
  results: {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
  }[];
};
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.NEXT_PUBLIC_MOVIE_KEY!;

async function tmdbFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${TMDB_BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`TMDB ${res.status}: ${text}`);
  }

  return res.json();
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movieId = Number(id);
  if (!Number.isFinite(movieId)) {
    throw new Error(`Invalid movie id: ${id}`);
  }

  const [movie, credits, similar] = await Promise.all([
    tmdbFetch<MovieDetail>(`/movie/${movieId}?language=en-US`),
    tmdbFetch<CreditsResponse>(`/movie/${movieId}/credits?language=en-US`),
    tmdbFetch<SimilarResponse>(
      `/movie/${movieId}/similar?language=en-US&page=1`,
    ),
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* TITLE */}
      <h1 className="text-3xl font-bold">{movie.title}</h1>

      {/* META */}
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>{movie.release_date}</span>
        <span>⭐ {movie.vote_average.toFixed(1)}</span>
        <span>{movie.runtime} min</span>
      </div>

      {/* GENRES */}
      {movie.genres?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((g) => (
            <span key={g.id} className="rounded-full border px-3 py-1 text-xs">
              {g.name}
            </span>
          ))}
        </div>
      )}

      {/* OVERVIEW */}
      <p className="max-w-3xl text-gray-800">{movie.overview}</p>

      {/* CAST */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Cast</h2>
        <div className="flex gap-4 overflow-x-auto">
          {credits.cast.slice(0, 10).map((c) => (
            <div key={c.id} className="w-28 flex-shrink-0">
              <div className="h-40 bg-gray-200 rounded mb-1" />
              <p className="text-sm font-medium">{c.name}</p>
              <p className="text-xs text-gray-500">{c.character}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
              />
            </div>
          ))}
        </div>
      </div>

      {/* SIMILAR */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Similar movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {similar.results.map((m) => (
            <div key={m.id}>
              <div className="h-48 bg-gray-200 rounded mb-1" />
              <p className="text-sm">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
