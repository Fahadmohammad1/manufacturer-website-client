import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: owner,
    isLoading,
    refetch,
  } = useQuery(["owner", user], () =>
    fetch(`https://ancient-wave-77953.herokuapp.com/user/${user?.email}`).then(
      (res) => res.json()
    )
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (loading || isLoading) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    const userData = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      address: data?.address,
      phone: data?.phone,
      education: data?.education,
      linkedIn: data?.link,
    };
    if (user) {
      fetch(`https://ancient-wave-77953.herokuapp.com/user/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            toast.success("Information updated Successfully");
          }
          if (result.upsertedCount > 0) {
            toast.success("Information Saved Successfully");
          }
          refetch();
        });
    }
    reset();
  };
  return (
    <section>
      <h1 className="text-2xl font-bold font-serif">Update Your Profile</h1>
      <div className="lg:flex mx-auto">
        <div className="px-2 mx-auto lg:mx-0 w-full">
          <div className="max-w-sm content-center flex flex-col bg-white mt-[3vh] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className=" h-40 rounded-t-lg bg-contain bg-no-repeat bg-[url(https://www.linkpicture.com/q/Rectangle-6.png)] flex flex-col justify-end pl-20 pr-20 pt-52  max-w-[24rem]">
              <img
                className="w-28 h-28 object-cover  mb-2 z-10 "
                src={
                  user?.photoURL ||
                  "https://p.kindpng.com/picc/s/134-1341738_contacts-icon-contact-icon-png-red-transparent-png.png"
                }
                alt="logo"
              />
            </div>
            <div className="flex flex-col  pl-10  pb-10">
              <h1 className="text-3xl text-secondary font-semibold">
                {owner?.name || "Unknown"}
              </h1>
              <div className="mt-2 flex items-center">
                <img
                  className="w-5"
                  src="https://www.linkpicture.com/q/image-14_4.png"
                  alt=""
                />
                <h1 className="text-base text-primary ml-5 font-semibold">
                  {owner?.email}
                </h1>
              </div>

              <div className="mb-2 mt-2">
                <h1 className="text-base text-secondary font-semibold ">
                  More Info
                </h1>
              </div>
              <div>
                <div className="mt-2 flex items-center text-white">
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
                  <h1 className="text-base text-primary ml-5 font-semibold">
                    {owner?.phone}
                  </h1>
                </div>
                <div className="mt-2 flex items-center text-white">
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
                  <h1 className="text-base text-primary ml-5 font-semibold">
                    {owner?.education}
                  </h1>
                </div>
                <div className="mt-2 flex items-center text-white">
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
                  <h1 className="text-base text-primary ml-5 font-semibold">
                    {owner?.address}
                  </h1>
                </div>
                <div className="mt-2 flex items-center text-white"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-2 mx-auto flex items-center">
          <div className="max-w-sm content-center flex flex-col bg-white mt-[3vh] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:flex gap-4">
                <div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text text-white">
                        Home Address
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Enter Delivery Address",
                        },
                      })}
                      placeholder="Address"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.address?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors?.address.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text text-white">
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Enter Phone Number",
                        },
                        minLength: {
                          value: 11,
                          message: "11 digit Number Required",
                        },
                      })}
                      placeholder="+880"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.phone?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors?.phone.message}
                        </span>
                      )}
                      {errors.phone?.type === "minLength" && (
                        <span className="label-text-alt text-red-600">
                          {errors?.phone.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text text-white">Education</span>
                    </label>
                    <input
                      {...register("education", {
                        required: {
                          value: true,
                          message: "Education background required",
                        },
                      })}
                      type="text"
                      placeholder="Education"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.education?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors?.education.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text text-white">LinkedIn</span>
                    </label>
                    <input
                      {...register("link", {
                        required: {
                          value: true,
                          message: "LinkedIn profile link required",
                        },
                      })}
                      type="url"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {errors?.link?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors?.link.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="submit"
                  className="input text-gray-800 hover:text-white input-bordered w-full max-w-xs btn mx-auto"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
