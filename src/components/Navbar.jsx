import Genres from "./Genres";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";
export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6 flex-wrap">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      <Genres title="Action" param="fetchAction18" />
      <Genres title="Comedy" param="fetchComedy35" />
      <Genres title="Crime" param="fetchCrime80" />
      <Genres title="Horror" param="fetchHorror27" />
      <Genres title="Fantasy" param="fetchFantasy14" />
      <Genres title="Thriller" param="fetchThriller53" />
      <SearchBox />
    </div>
  );
}
