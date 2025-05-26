/* eslint-disable react/no-unescaped-entities */
import React from "react";

import PlansSection from "@/app/_components/_website/_Home/PlansSection";
import SwiperBartners from "@/app/_components/_website/_pricing/SwiperBartners";
import { cards, FeaturesCards } from "@/app/constants/website";

export default function page() {
  return (
    <>
      <div className="lg:mt-32 mt-20 custom-container min-h-screen">
        <h1 className="text-gray-200 text-2xl xl:text-5xl mb-12">
          FlixTV – Best place for movies
        </h1>
        <p className="max-lg:text-[14px] text-[17px] text-gray-300 mb-6 xl:w-[85%] w-full">
          Many desktop publishing packages and
          <span className="px-1 text-primary_blue cursor-pointer hover:text-sky-700">
            web page
          </span>{" "}
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </p>

        <p className="max-lg:text-[14px] text-[17px] text-gray-300 mb-3 xl:w-[85%] w-full">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        {/* Cards */}
        <div className="w-full justify-items-center mt-12  gap-8 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full p-2 my-4 max-lg:pb-2 max-lg:border-b border-gray-700 bg-[#151f30] py-12 px-12  rounded-2xl"
            >
              <div className="flex items-center gap-4 lg:gap-6 mb-4">
                <div className="w-12 h-12 rounded-full font-bold flex items-center justify-center text-2xl bg-[#1d3d6a] text-primary_blue">
                  {card.number}
                </div>
                <h2 className="text-gray-200 text-lg font-bold">
                  {card.title}
                </h2>
              </div>
              <p className="text-gray-300 xl:text-[17px] text-[15px] leading-7 xl:w-[90%] w-full">
                {card.content}
              </p>
            </div>
          ))}
        </div>
        {/* Features */}
        <div className="w-full mt-12">
          <h1 className="text-gray-200 text-2xl xl:text-4xl mb-12">
            Subscribe features
          </h1>
          {/* Features Cards */}
          <div className="w-full justify-items-center mt-12  lg:gap-x-8 lg:gap-y-14 gap-4  grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
            {FeaturesCards.map((card, index) => (
              <div
                key={index}
                className="w-full p-2 my-4 max-lg:pb-2 not-last:max-lg:border-b border-gray-700"
              >
                <div className="flex items-center gap-4 lg:gap-6 mb-4">
                  {card.icon}
                  <h2 className="text-gray-200 text-lg">{card.title}</h2>
                </div>
                <p className="text-gray-300 xl:text-[17px] text-[15px] leading-7 xl:w-[90%] w-full">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Plans Section */}
      <PlansSection />
      {/* Swiper partners */}
      <div className="custom-container">
        <SwiperBartners />
      </div>
    </>
  );
}
