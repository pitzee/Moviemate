import TrendingMovies from "@/components/TrendingMovies";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TrendingMovies />
      <Recommendations />
    </div>
  );
}
