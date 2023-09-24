import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //Fetching the data from the TMDB API for Now Playing Movies
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
