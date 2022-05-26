import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  console.log(rating);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Select Rating (1 - 5)</span>
        </label>
        <label class="input-group">
          <span
            onClick={() => setRating(rating - 1)}
            className="font-bold text-2xl"
          >
            -
          </span>
          <input
            {...register("rating", {
              required: {
                value: true,
                message: "Please give rating 1 to 5",
              },
              max: {
                value: "5",
                message: "Maximum rating 5",
              },
              onchange: (e) => setRating(e.target.value),
            })}
            type="number"
            value={rating}
            class="input input-bordered"
          />
          <span
            disabled={rating === 5}
            onClick={() => setRating(rating + 1)}
            className="font-bold text-2xl"
          >
            +
          </span>
        </label>
        <label class="label">
          {errors?.rating?.type === "required" && (
            <span class="label-text">{errors?.rating?.message}</span>
          )}
          {errors?.rating?.type === "max" && (
            <span class="label-text">{errors?.rating?.message}</span>
          )}
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your bio</span>
          <span class="label-text-alt">Alt label</span>
        </label>
        <textarea
          class="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
        <label class="label">
          <span class="label-text-alt">Your bio</span>
          <span class="label-text-alt">Alt label</span>
        </label>
      </div>
    </form>
  );
};

export default AddReview;
