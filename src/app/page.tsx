import { Header } from "@/app/components/Header";
import Allmovie from "@/app/about/components/Allmovie";
import NowPlaying from "@/app/about/components/Nowplaying";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <NowPlaying />
      <Allmovie />
      <Footer />
    </div>
  );
}
