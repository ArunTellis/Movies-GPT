import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  //Fetching the data from the TMDB API for Upcoming Movies

  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;
