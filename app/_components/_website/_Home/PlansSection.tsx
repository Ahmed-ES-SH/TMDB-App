import { plans, sharedOptions } from "@/app/constants/website";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function PlansSection() {
  return (
    <>
      <div className="head custom-container mb-6">
        <h1 className="text-5xl font-bold text-white my-2">Select Your Plan</h1>
        <p className="text-white text-xl font-light">
          No hidden fees, equipment rentals, or installation appointments.
        </p>
      </div>
      <div className="custom-container grid max-md:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-3 gap-12 items-start">
        {plans.map((plan, planIndex) => (
          <div
            className={`w-full min-h-[480px] max-md:h-fit  flex flex-col justify-between ${
              planIndex == 1
                ? "bg-primary_blue xl:-translate-y-8"
                : "bg-fourth_color"
            } p-6 rounded-lg shadow-md`}
            key={planIndex}
          >
            <div>
              <h1 className="text-white text-2xl font-semibold pb-4 border-b border-gray-700 mb-4">
                {plan.title}
              </h1>
              <div className="flex flex-col gap-8 max-md:gap-4 pb-4 border-b border-gray-700">
                {sharedOptions.map((option, index) => (
                  <div
                    className="flex items-center gap-3 text-white"
                    key={index}
                  >
                    {plan.icons[index] ? (
                      <IoCheckmark className="text-green-400" />
                    ) : (
                      <RxCross1 className="text-red-500" />
                    )}
                    <p className="text-gray-300">{option}</p>
                  </div>
                ))}
              </div>
              <div
                id="price"
                className="flex items-end text-white mt-6 max-md:mt-3"
              >
                <h2 className="text-3xl font-bold">${plan.price}</h2>
                <span className="text-[14px]">/month</span>
              </div>
            </div>

            <button
              id="btn"
              className={`block mt-4 mb-2 w-[80%] max-md:w-[98%] py-4 mx-auto rounded-xl text-center text-white cursor-pointer bg-secondery_dash duration-300 ${
                planIndex === 1
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-primary_blue"
              }`}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
