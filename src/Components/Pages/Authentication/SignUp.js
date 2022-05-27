import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";
import useToken from "../../../Hooks/useToken";

const SignUp = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);

  const [token] = useToken(eUser || user);
  if (token) {
    navigate("/login");
  }

  if (loading || updating || eLoading) {
    return <Loading />;
  }
  const newUser = {
    name: eUser?.user?.displayName,
    email: eUser?.user?.email,
    image: eUser?.user?.photoURL,
  };

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.Email, data.Password);
    await updateProfile({ displayName: data.name });
    await fetch(`http://localhost:5000/user/${data.Email}`, {
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
    reset();
  };

  return (
    <div className="container mx-auto">
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              GoFinance
            </h1>
            <p className="text-white mt-1">
              Be a member of our community by creating new account
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
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-gray-800 font-bold text-2xl text-center">
              Create New Account
            </h1>
            <div className="text-center">
              <Link to="/login">
                <small>Already have an Account?</small>
                <button className="btn btn-link">Login</button>
              </Link>
            </div>
            <div className="divider">OR</div>
            <div className="flex items-center border-2 border-primary py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                {...register("name", {
                  required: {
                    value: true,
                  },
                })}
                className="pl-2 outline-none border-none bg-[#E0E0E0]"
                type="text"
                placeholder="Full name"
              />
            </div>
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
            <p>
              {eError?.message.slice(-22, -2) ||
                updateError?.message.slice(-22, -2)}
            </p>
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
