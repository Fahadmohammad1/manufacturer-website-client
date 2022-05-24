import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.Email, data.Password);
    reset();
  };

  return (
    <div className="container mx-auto">
      <div class="h-screen md:flex">
        <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
            <p class="text-white mt-1">
              The most popular peer to peer lending at SEA
            </p>
            <button
              type="submit"
              class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
          <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 class="text-gray-800 font-bold text-2xl text-center">
              Create New Account
            </h1>
            <div className="text-center">
              <Link to="/login">
                <small>Already have an Account?</small>
                <button class="btn btn-link">Login</button>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                />
                Github
              </button>
              <button
                onClick={() => signInWithGoogle()}
                className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                />
                Google{" "}
              </button>
            </div>

            <div class="divider">OR</div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none bg-[#E0E0E0]"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div class="flex items-center border-2 border-orange-500 py-2 px-3 rounded-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="pl-2 outline-none border-none bg-[#E0E0E0]"
                {...register("Email", {
                  required: {
                    value: true,
                    message: "Enter email address",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
            </div>
            <label className="label">
              {errors.Email?.type === "required" && (
                <p className="text-red-400">{errors.Email.message}</p>
              )}
              {errors.Email?.type === "pattern" && (
                <p className="text-red-400">{errors.Email.message}</p>
              )}
            </label>
            <div class="flex items-center border-2 border-orange-500 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="password"
                placeholder="Password"
                className="pl-2 outline-none border-none bg-[#E0E0E0]"
                {...register("Password", {
                  required: {
                    value: true,
                    message: "Enter valid password",
                  },
                  minLength: {
                    value: 6,
                    message: "Enter 6 digit password",
                  },
                })}
              />
            </div>
            <label className="label">
              {errors.Password?.type === "required" && (
                <p className="text-red-400">{errors.Password.message}</p>
              )}
              {errors.Password?.type === "minLength" && (
                <p className="text-red-400">{errors.Password.message}</p>
              )}
            </label>
            <input
              className="block w-full bg-indigo-600 py-2 rounded-2xl text-white font-semibold mb-1"
              type="submit"
              value="SIGN UP"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
