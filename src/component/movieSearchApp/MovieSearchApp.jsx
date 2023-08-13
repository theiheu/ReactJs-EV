// API: 1760ac0af799ab5fc2105b216bc09ce0
// Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzYwYWMwYWY3OTlhYjVmYzIxMDViMjE2YmMwOWNlMCIsInN1YiI6IjYzYWZjN2E0NWFkNzZiMDA5NGM3OWM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbGxzbExIQe_5xymngDEeNEXT-oBlUzHiYo9YmE2Dbc

// LinK: 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=1760ac0af799ab5fc2105b216bc09ce0'
import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../MovieItem";
import useDebounce from "../../hooks/useDebounce";
import LoadingSkeleton from "../loading/LoadingSkeleton";

function MovieSearchApp() {
  const apiKey = "1760ac0af799ab5fc2105b216bc09ce0";
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("spider man");
  const queryDebounce = useDebounce(query, 500);
  const [loading, setLoading] = useState(true);
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      const respone = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${queryDebounce}&api_key=${apiKey}`
      );

      if (respone.data.results.length > 0) {
        setMovies(respone.data.results);
        console.log(
          "🚀 ~ file: MovieSearchApp.jsx:27 ~ fetchData ~ respone.data.results:",
          respone.data.results
        );
      }
    }

    setLoading(true);

    fetchData();
  }, [query, queryDebounce]);

  const handleSubmit = (e) => {
    console.log(arrMovies);
    e.preventDefault();
    // if (valSearch.value) {
    //   const newUrl = `https://api.themoviedb.org/3/search/movie?query=${valSearch.value}&api_key=1760ac0af799ab5fc2105b216bc09ce0`;
    //   setUrl(newUrl);
    // } else {
    //   console.log("object");
    //   setUrl("");
    // }
    // console.log("movies.length :>> ", movies);
  };

  return (
    <form>
      <input
        className="p-3 border-2 border-purple-600 rounded-md focus:outline-none
        shadow-[rgba(0,_0,_0,_0.15)_0px_2px_8px]"
        type="text"
        placeholder="Please enter movie,..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="p-3 m-3 border-2 border-orange-500 bg-red-400 rounded-md w-[120px] text-white cursor-pointer"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
      {!loading ? (
        <div className="Movie-list mt-[100px] grid grid-cols-4 gap-12">
          {movies.length > 0 &&
            movies.map((item) => {
              return <MovieItem key={item.id} data={item} />;
            })}
        </div>
      ) : (
        <div className="Movie-list mt-[100px] grid grid-cols-4 gap-12">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      )}
    </form>
  );
}

export default MovieSearchApp;
