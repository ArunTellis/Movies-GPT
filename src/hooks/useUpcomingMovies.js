import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  //Fetching the data from the TMDB API for Upcoming Movies

  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    if (!upComingMovies) getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;
