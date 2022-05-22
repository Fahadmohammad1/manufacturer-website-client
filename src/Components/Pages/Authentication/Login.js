import React from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log(errors);
  const onSubmit = (e) => {};
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl ">
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
            {/* <label className="label">
              <span className="label-text text-white">Email</span>
            </label> */}
            <input
              className="pl-2 outline-none border-none"
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
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
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
            {/* <label className="label">
              <span className="label-text text-white">Password</span>
            </label> */}
            <input
              type="password"
              className="pl-2 outline-none border-none"
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
            className="block w-full bg-indigo-600  py-2 rounded-2xl text-white font-semibold mb-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;