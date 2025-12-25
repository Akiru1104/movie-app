type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  return (
    <div style={{ width: 200 }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={200}
      />
      <div>{movie.title}</div>
      <div>⭐ {movie.vote_average}</div>
    </div>
  );
}
