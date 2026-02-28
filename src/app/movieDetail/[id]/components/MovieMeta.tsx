type Props = {
  title: string;
  releaseDate: string;
  runtime: number;
  voteAverage: number;
  voteCount: number;
  certification?: string;
};

function formatRuntime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}


export default function MovieMeta({ title, releaseDate, runtime, voteAverage, voteCount, certification }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          <span>{releaseDate.replace(/-/g, ".")}</span>
          {certification && (
            <>
              <span>·</span>
              <span>{certification}</span>
            </>
          )}
          <span>·</span>
          <span>{formatRuntime(runtime)}</span>
        </div>
      </div>
      <div className="flex flex-col sm:items-end">
        <span className="text-base font-bold text-gray-800">Rating</span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-base">★</span>
          <span className="font-bold text-gray-800 text-base">{voteAverage.toFixed(1)}</span>
          <span className="text-gray-400 text-base">/10</span>
        </div>
        <span className="text-xs text-gray-400">{(voteCount / 1000).toFixed(0)}k</span>
      </div>
    </div>
  );
}
