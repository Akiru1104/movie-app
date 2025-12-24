type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  return (
    <div style={{ width: 200 }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={200}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
}
