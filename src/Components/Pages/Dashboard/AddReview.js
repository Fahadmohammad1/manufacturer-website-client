import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    const userReview = {
      name: user.displayName,
      email: user.email,
      rating: data.rating,
      review: data.review,
      image: user.photoURL,
    };
    if (user) {
      fetch(`http://localhost:5000/review/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userReview),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            toast.success("Review updated Successfully");
          }
          if (result.upsertedCount > 0) {
            toast.success("Review added Successfully");
          } else {
            toast.error("failed to add Review");
          }
        });
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
      <div className="form-control">
        <label className="label flex justify-center">
          <span className="label-text">Select Rating (1 - 5)</span>
        </label>
        <label className="input-group flex justify-center">
          <input
            {...register("rating", {
              required: {
                value: true,
                message: "Please give rating 1 to 5",
              },
              min: {
                value: 1,
                message: "Mininimum rating 1",
              },
              max: {
                value: 5,
                message: "Maximum rating 5",
              },
            })}
            type="number"
            placeholder="1-5"
            className="input input-bordered"
          />
        </label>
        <label className="label flex justify-center">
          {errors?.rating?.type === "required" && (
            <span className="label-text text-red-600">
              {errors?.rating?.message}
            </span>
          )}
          {errors?.rating?.type === "max" && (
            <span className="label-text text-red-600">
              {errors?.rating?.message}
            </span>
          )}{" "}
          {errors?.rating?.type === "min" && (
            <span className="label-text text-red-600">
              {errors?.rating?.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Review</span>
        </label>
        <textarea
          type="text"
          {...register("review", {
            required: {
              value: true,
              message: "Please add a review",
            },
          })}
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
        <label className="label">
          {errors?.type?.review === "required" && (
            <span className="label-text-alt">{errors?.review?.message}</span>
          )}
        </label>
      </div>
      <div className="flex justify-center">
        <input
          disabled={
            errors.quantity?.type === "max" || errors.quantity?.type === "min"
          }
          type="submit"
          value="submit"
          className="input text-gray-800 hover:text-white input-bordered w-full max-w-xs btn"
        />
      </div>
    </form>
  );
};

export default AddReview;
