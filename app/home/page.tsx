import MovieVideo from "../components/section/movie-modal/MovieVideo";
import Navbar from "../components/navbar/Navbar";
import RecentlyAdded from "../components/slider/RecentlyAdded";
import ContinueWatching from "../components/slider/ContinueWatching";
import OnlyNetflix from "../components/slider/OnlyNetflix";
import TopTenTVShows from "../components/slider/TopTenTVShows";
import Trending from "../components/slider/Trending";
import MyList from "../components/slider/MyList";
import TvComedies from "../components/slider/TvComedies";
import ComedyMovies from "../components/slider/ComedyMovies";
import ContinueWatchingCard from "../components/slider/ContinueWatchingCard";


export default function HomePage() {
  return (
    
    <div className="p-5 lg:p-0">
      <MovieVideo />

      <div className="-ms-24 mt-64">
        <ContinueWatchingCard/>
        {/* <OnlyNetflix />
        <TopTenTVShows />
        <Trending />
        <MyList />
        <TvComedies />
        <ComedyMovies />
         */}
         <RecentlyAdded/>
        
      </div>

    </div>
  );
}