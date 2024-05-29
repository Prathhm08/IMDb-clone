import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  const convertDate = (dateString) => {
    if (!dateString) {
      return null;
    }
    const date = new Date(dateString);
    if (isNaN(date)) return null;
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg  sm:m-2 transition-shadow duration-200 ">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : "https://placehold.co/300x450"
          }
          width={300}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 "
          alt="Poster of the movie"
          unoptimized
          priority
        ></Image>

        <div className="p-2 dark:bg-zinc-800 ">
          <p className="line-clamp-2 text-md ">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {convertDate(result.release_date) ||
              convertDate(result.first_air_date)}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
