// import { fetchFromUpComingMovieDB } from "@/app/about/components/Allmovie";

// const MovieCategoryPage = async ({
//   params,
// }: {
//   params: Promise<{ movieCategory: string }>;
// }) => {
//   const { movieCategory } = await params;

//   const movies: Movie[] = await fetchFromUpComingMovieDB(movieCategory);

//   console.log(movies);
//   return <div> Category Dynamic Routing Page {movieCategory}</div>;
// };

// export default MovieCategoryPage;

export default async function MovieCategoryPage({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) {
  const { movieCategory } = await params;

  return <div> Category Dynamic Routing Page {movieCategory} </div>;
}
