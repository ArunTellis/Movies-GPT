import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const ToggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="home screen"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black  my-32 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />

        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <button className="bg-red-700 p-4 my-6 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={ToggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already user Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
