import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { showGptMovieResults, showGptMovieNames } = gpt;
  if (!showGptMovieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-teal-100 bg-opacity-70">
      <div>
        {showGptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={showGptMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
