import MovieVideo from "../components/section/MovieVideo";
import Navbar from "../components/navbar/Navbar";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage() {
  return (
    
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold mt-56">Recently Added</h1>
      <RecentlyAdded />
    </div>
  );
}