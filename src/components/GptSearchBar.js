import React from "react";
import languageTranslate from "../utils/LanguageTranslate";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/OpenAi";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResults } from "../utils/GptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  //It will search in the TMDB API
  const seaarchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as an Movie Recommendation System and suggest some movies for the mentioned query" +
      searchText.current.value +
      " only give me the names of the 5 movies comma separated like the ahead example. Example Result:Sholay,Gadar,Don,Jawan,Golmaal";
    //Ill make an API call to OpenAI to get the results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      console.log("Error");
    }
    console.log(gptResults.choices[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //For each movie Ill search the results in TMDB Api
    //Search in the TMDB for each movie
    //It will return the array of promises
    const promiseArray = gptMovies.map((movie) => seaarchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className=" flex justify-center pt-[35%] md:pt-[10%]">
      <form
        className="w-screen md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languageTranslate[languageKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4  bg-red-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {languageTranslate[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
