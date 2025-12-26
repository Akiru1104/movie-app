import { use } from "react";
import { MovieCard } from "@/app/about/components/MovieCard";

const MovieCategoryPage = async ({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) => {
  const { movieCategory } = await params;

  const movies: Movie[] = await fetchFromUpComingMovieDB(movieCategory);

  // const { movieCategory } = await fetchFromUpComingMovieDB(movieCategory);

  return <div>{movieCategory}</div>;
};

export default MovieCategoryPage;
