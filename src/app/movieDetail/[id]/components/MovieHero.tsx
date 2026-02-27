const IMG_BASE = "https://image.tmdb.org/t/p";

type Trailer = {
  key: string;
  name: string;
};

type Props = {
  posterPath: string | null;
  backdropPath: string | null;
  trailer: Trailer | undefined;
  voteAverage: number;
  voteCount: number;
};

export default function MovieHero({
  posterPath,
  backdropPath,
  trailer,
  voteAverage,
  voteCount,
}: Props) {
  return (
    <div className="flex gap-4 items-start">
      {/* Poster */}
      <div className="flex-shrink-0 w-[180px] rounded-lg overflow-hidden">
        {posterPath ? (
          <img
            src={`${IMG_BASE}/w500${posterPath}`}
            alt="poster"
            className="w-full h-auto object-cover"
          />
        ) : (
          <div className="w-full h-[260px] bg-gray-200 flex items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Trailer */}
      <div className="relative flex-1 rounded-lg overflow-hidden bg-black">
        {backdropPath && (
          <img
            src={`${IMG_BASE}/w1280${backdropPath}`}
            alt="backdrop"
            className="w-full h-[260px] object-cover opacity-80"
          />
        )}
        {trailer && (
          <a
            href={`https://www.youtube.com/watch?v=${trailer.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex items-center gap-2 bg-black/60 hover:bg-black/80 transition text-white px-5 py-3 rounded-full text-sm font-medium">
              <span className="text-lg">▶</span>
              Play trailer
            </div>
          </a>
        )}
      </div>

      {/* Rating */}
      <div className="flex-shrink-0 w-[90px] text-center space-y-1">
        <p className="text-xs text-gray-400 uppercase tracking-wide">Rating</p>
        <div className="flex items-center justify-center gap-1">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="font-bold text-lg">{voteAverage.toFixed(1)}</span>
          <span className="text-gray-400 text-xs">/10</span>
        </div>
        <p className="text-xs text-gray-400">
          {(voteCount / 1000).toFixed(0)}k
        </p>
      </div>
    </div>
  );
}
