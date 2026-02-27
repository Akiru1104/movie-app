type Props = {
  title: string;
  releaseDate: string;
  runtime: number;
};

function formatRuntime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function formatDate(dateStr: string) {
  return dateStr.replace(/-/g, ".");
}

export default function MovieMeta({ title, releaseDate, runtime }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
        <span>{formatDate(releaseDate)}</span>
        <span>·</span>
        <span>{formatRuntime(runtime)}</span>
      </div>
    </div>
  );
}
