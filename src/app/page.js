import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  let url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;
  if (genre === "fetchTopRated" || genre === "fetchTrending") {
    url = `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.slice(
      -2
    )}&language=en-US&page=1`;
  }
  const res = await fetch(url, { next: { revalidate: 10000 } });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
