import MovieVideo from "../components/movie-modal/MovieVideo"
import RecentlyAdded from "../components/slider/RecentlyAdded"
// import OnlyNetflix from "../components/slider/OnlyNetflix"
// import MyList from "../components/slider/MyList"
// import TvComedies from "../components/slider/TvComedies"
// import ComedyMovies from "../components/slider/ComedyMovies"
import ContinueWatchingCard from "../components/slider/ContinueWatchingCard"
import Resizable from "../components/slider/slider-modal/SliderModal";

export default  function HomePage() {

  return (
    <>
      <MovieVideo />
      <div className="ml-5 lg:ml-14 -mt-20 lg:-mt-36 space-y-8 pb-96">
        <ContinueWatchingCard/>
        {/* <OnlyNetflix />
        <MyList />
        <TvComedies />
        <ComedyMovies />
         */}
         <RecentlyAdded/>
        
        
      </div>
    </>
  );
}