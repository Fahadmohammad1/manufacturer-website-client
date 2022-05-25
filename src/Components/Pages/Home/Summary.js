import React from "react";

const Summary = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-10 text-center font-bold font-serif">
        Take a look to our Business Summary
      </h1>
      <div class="stats shadow">
        <div class="stat flex flex-col">
          <div class="stat-figure text-[#F59B30]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div class="stat-title">Reviews</div>
            <div class="stat-value">33K+</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        </div>

        <div class="stat flex flex-col">
          <div class="stat-figure text-[#F59B30]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div class="stat-title">Annual Revenue</div>
            <div class="stat-value">120M+</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>
        </div>

        <div class="stat flex flex-col">
          <div class="stat-figure text-[#F59B30]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div class="stat-title">Customers</div>
            <div class="stat-value">1,200+</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

        <div class="stat flex flex-col">
          <div class="stat-figure text-[#F59B30]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div class="stat-title">Parts</div>
            <div class="stat-value">50+</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
