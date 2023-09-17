import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/MovieSlice";

const useTopRatedMovies = () => {
  //Fetching the data from the TMDB API for Top Rated Movies
  const dispatch = useDispatch();

  const topRated = useSelector((store) => store.movies.popularMovies);

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, []);
};

export default useTopRatedMovies;
