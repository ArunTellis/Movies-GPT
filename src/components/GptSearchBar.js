import React from "react";
import languageTranslate from "../utils/LanguageTranslate";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[5%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languageTranslate[languageKey].gptSearchPlaceHolder}
        />
        <button className="col-span-3 py-2 px-4 m-4  bg-red-800 text-white rounded-lg">
          {languageTranslate[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
