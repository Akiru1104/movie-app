type CrewMember = {
  id: number;
  name: string;
  job: string;
};

type CastMember = {
  id: number;
  name: string;
  character: string;
};

type Props = {
  director: CrewMember | undefined;
  writers: CrewMember[];
  stars: CastMember[];
};

export default function MovieCredits({ director, writers, stars }: Props) {
  return <div className="space-y-3 text-sm"></div>;
}
