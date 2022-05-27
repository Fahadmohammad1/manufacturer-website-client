import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
// import { Link } from "react-router-dom";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [signInWithEmailAndPassword, , eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(gUser || user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
    if (user) {
      const newUser = {
        name: gUser?.user?.displayName,
        email: gUser?.user?.email,
        image: gUser?.user?.photoURL,
      };

      fetch(`http://localhost:5000/user/${gUser?.user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  }, [from, navigate, user, gUser, token]);

  if (loading || eLoading || gLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.Email, data.Password);
    reset();
  };
  return (
    <div className="h-screen lg:flex container mx-auto">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Welcome Back
          </h1>
          <p className="text-white mt-1">
            Login back to your account, Stay connected with us
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="mx-auto flex w-1/2 justify-center items-center bg-white mt-7 lg:mt-0">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-gray-800 font-bold text-2xl text-center">
            Login to your account
          </h1>
          <div className="text-center">
            <Link to="/signup">
              <small>Don't have an Account?</small>
              <button className="btn btn-link">Sign Up</button>
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
              onClick={() => {
                signInWithGoogle();
              }}
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

          <div className="divider">OR</div>
          <div className="flex items-center border-2 border-primary py-2 px-3 rounded-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
          <div className="flex items-center border-2 border-primary py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
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
          <p className="text-red-600 text-center mb-2">
            {gError?.message.slice(-22, -2) || eError?.message.slice(-22, -2)}
          </p>
          <input
            className="block w-full bg-indigo-600 py-2 rounded-2xl text-white font-semibold mb-1"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
