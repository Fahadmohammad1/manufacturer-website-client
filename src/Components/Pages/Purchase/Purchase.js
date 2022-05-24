import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-16 mx-auto flex flex-col">
          <div class="lg:w-5/6 mx-auto">
            <div class="rounded-lg h-72 overflow-hidden flex justify-center">
              <img
                class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://i.pcmag.com/imagery/reviews/05dlxpTWj83p24d3EclZBw3-23..v1569469949.jpg"
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-6">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 order-2">
                <div class="w-16 h-16 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={user?.photoURL} alt="user" />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    {user?.email}
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Your Address</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full max-w-xs"
                      />
                      <label class="label">
                        <span class="label-text-alt">Alt label</span>
                        <span class="label-text-alt">Alt label</span>
                      </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Phone Number</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full max-w-xs"
                      />
                      <label class="label">
                        <span class="label-text-alt">Alt label</span>
                        <span class="label-text-alt">Alt label</span>
                      </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Order Quantity</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Type here"
                        class="input input-bordered w-full max-w-xs"
                      />
                      <label class="label">
                        <span class="label-text-alt">Alt label</span>
                        <span class="label-text-alt">Alt label</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex items-center">
                <div class="card max-w-lg bg-base-100 shadow-xl mb-8 lg:mb-0">
                  <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Buy Now</button>
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
