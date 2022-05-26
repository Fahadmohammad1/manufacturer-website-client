import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-2xl text-center font-bold font-serif">
        Update Your Profile
      </h1>

      <div class="max-w-sm content-center flex flex-col justify-center mx-auto bg-white mt-[3vh] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class=" h-40 rounded-t-lg bg-contain bg-no-repeat bg-[url(https://www.linkpicture.com/q/Rectangle-6.png)] flex flex-col justify-end pl-20 pr-20 pt-52  max-w-[24rem]">
          <img
            class="w-28 h-28 object-cover  mb-2 z-10 "
            src={user?.photoURL}
            alt="logo"
          />
        </div>
        <div class="flex flex-col  pl-10  pb-10">
          <h1 class="text-3xl text-secondary font-semibold">
            {user?.displayName}
          </h1>
          <div class="mt-2 flex items-center">
            <img
              class="w-5"
              src="https://www.linkpicture.com/q/image-14_4.png"
              alt=""
            />
            <h1 class="text-base text-primary ml-5 font-semibold">
              {user?.email}
            </h1>
          </div>

          <div class="mb-2 mt-2">
            <h1 class="text-base text-secondary font-semibold ">More Info</h1>
          </div>
          <div>
            <div class="mt-2 flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
              <h1 class="text-base text-primary ml-5 font-semibold">
                +880194454534
              </h1>
            </div>
            <div class="mt-2 flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h1 class="text-base text-primary ml-5 font-semibold">
                National University
              </h1>
            </div>
            <div class="mt-2 flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <h1 class="text-base text-primary ml-5 font-semibold">
                Chittagong
              </h1>
            </div>
            <div class="mt-2 flex items-center text-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
