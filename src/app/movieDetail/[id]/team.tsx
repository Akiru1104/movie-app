type Props = {
  movieId: String;
};

const fetchCredits = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {headers: {
        "Content-Type": "application/json", 
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`, 

    }, 
}
  );
   const data = await response.json();
   return data; 
};

export const Team = async ({movieId }:{movieId : String})=> {
    const result = await fetchCredits(""); 

    const cast : CastMember[] = result.cast  || []; 
    const crew : CrewMember[] = result.crew || []; 

    const director = crew.find ((member) =>member.job === "Director"); 

    const writers = new Set (
        crew
        .filter((member)=>member.department==="Writing")
        .slice(0,4)
        .map(({name})=>name)

    ); 
    const stars =cast.slice(0,3); 
     return 
     <div>
        <div>Cast </div>
     </div>

    

}



