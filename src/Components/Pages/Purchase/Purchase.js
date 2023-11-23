import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);

  const [price, setPrice] = useState(0);

  const { id } = useParams();
  const { data: part, isLoading } = useQuery("part", () =>
    fetch(
      `http://localhost:5000/parts/${id}`
    ).then((res) => res.json())
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    const order = {
      product: part.name,
      name: user.displayName,
      email: user.email,
      address: data.address,
      phone: data.phone,
      quantity: data.quantity,
      price: price,
      image: part.image,
    };

    axios
      .post("http://localhost:5000/order", order)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Order Successful");
        }
      });
    setPrice(0);
    reset();
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-7 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="rounded-lg h-80 overflow-hidden flex justify-center">
              <img
                className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src={part.image}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-6 gap-10">
              <div className="sm:w-auto text-center sm:pb-8 order-2">
                <div className="w-16 h-16 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src={
                      user?.photoURL ||
                      "https://p.kindpng.com/picc/s/134-1341738_contacts-icon-contact-icon-png-red-transparent-png.png"
                    }
                    alt="user"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {user?.email}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:flex gap-4">
                      <div>
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text">Your Address</span>
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
                            <span className="label-text">Phone Number</span>
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
                            <span className="label-text">Order Quantity</span>
                          </label>
                          <input
                            {...register("quantity", {
                              onChange: (e) => {
                                setPrice(parseInt(e.target.value * part.price));
                              },
                              required: {
                                value: true,
                                message: "Please Enter Quantity",
                              },
                              max: {
                                value: `${part.available_quantity}`,
                                message: `please select less then ${part.available_quantity}`,
                              },
                              min: {
                                value: `${part.order_quantity}`,
                                message: `minimum order quantity ${part.order_quantity}`,
                              },
                            })}
                            type="number"
                            placeholder="Enter Quantity"
                            className="input input-bordered w-full max-w-xs"
                          />
                          <label className="label">
                            {errors.quantity?.type === "required" && (
                              <span className="label-text-alt text-red-600">
                                {errors?.quantity.message}
                              </span>
                            )}
                            {errors.quantity?.type === "max" && (
                              <span className="label-text-alt text-red-600">
                                {errors?.quantity.message}
                              </span>
                            )}
                            {errors.quantity?.type === "min" && (
                              <span className="label-text-alt text-red-600">
                                {errors?.quantity.message}
                              </span>
                            )}
                          </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text">Total Price</span>
                          </label>
                          <input
                            type="number"
                            value={price}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                          />
                          <label className="label"></label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        disabled={
                          errors.quantity?.type === "max" ||
                          errors.quantity?.type === "min"
                        }
                        type="submit"
                        value="submit"
                        className="input text-gray-800 hover:text-white input-bordered w-full max-w-xs btn"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="sm:w-auto sm:pb-8 mt-4 lg:pt-10 sm:mt-0 text-center sm:text-left flex items-center justify-center ">
                <div className="card max-w-lg bg-base-100 shadow-xl mb-8 lg:mb-0">
                  <div className="card-body">
                    <h2 className="card-title">
                      Category:
                      <span className="font-bold text-2xl">{part.name}</span>
                    </h2>
                    <p>{part.description}</p>
                    <div>
                      <p className="font-bold">
                        Per Unit Price: $<span>{part.price}</span>
                      </p>
                      <p className="font-bold">
                        Minimum Order Quantity: {""}
                        <span>{part.order_quantity}</span>
                      </p>
                      <p className="font-bold">
                        Available Quantity: {""}
                        <span>{part.available_quantity}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchase;
