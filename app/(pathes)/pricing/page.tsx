/* eslint-disable react/no-unescaped-entities */
import SwiperBartners from "@/app/_components/_website/_pricing/SwiperBartners";
import {
  AllSharedOptions,
  plansWithAllOpations,
} from "@/app/constants/website";
import React from "react";
import { CiVideoOn } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";
import { PiScreencastBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { TbTicket } from "react-icons/tb";
import { TiBook } from "react-icons/ti";

export default function Pricing() {
  const iconStyle = "size-10 text-primary_blue";

  const Cards = [
    {
      title: "Extensive Library",
      content:
        "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
      icon: <TiBook className={`${iconStyle}`} />,
    },
    {
      title: "Event Tickets",
      content:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
      icon: <TbTicket className={`${iconStyle}`} />,
    },
    {
      title: "Interactive Screenings",
      content:
        "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
      icon: <PiScreencastBold className={`${iconStyle}`} />,
    },
    {
      title: "Video Content",
      content:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
      icon: <CiVideoOn className={`${iconStyle}`} />,
    },
  ];

  return (
    <>
      <div className="lg:mt-32 mt-20 custom-container min-h-screen">
        <h1 className="text-gray-200 text-2xl xl:text-5xl mb-12">
          Pricing plans
        </h1>
        <p className="max-lg:text-[14px] text-[17px] text-gray-300 mb-6 xl:w-[85%] w-full">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
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
          {Cards.map((card, index) => (
            <div
              key={index}
              className="w-full p-2 my-4 max-lg:pb-2 max-lg:border-b border-gray-700"
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
        {/* Plans */}
        <div className="mt-12 w-full overflow-x-auto bg-fourth_color rounded-xl h-fit p-4">
          <table className="min-w-[1450px] text-white table-fixed mt-12">
            <thead>
              <tr>
                <th className="text-left px-6"></th>
                {plansWithAllOpations.map((plan, index) => (
                  <th key={index} className="p-4">
                    <div className="flex flex-col gap-1">
                      <h4 className="xl:text-lg text-[14px] text-left text-primary_blue whitespace-nowrap">
                        {plan.title}
                      </h4>
                      <h2 className="xl:text-5xl md:text-3xl text-2xl text-left font-bold text-gray-200">
                        ${plan.price}
                      </h2>
                      <span className="xl:text-[15px] text-[10px] text-gray-200">
                        /month
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {AllSharedOptions.map((option, index) => (
                <tr key={index} className="not-last:border-b border-gray-600">
                  <td className="text-white px-6 py-8">{option.text}</td>

                  {option.status
                    ? option.status.map((isAvailable, i) => (
                        <td key={i} className="text-center">
                          {isAvailable ? (
                            <IoCheckmarkOutline className="text-green-500 size-6 mx-auto" />
                          ) : (
                            <RxCross1 className="text-red-500 size-6 mx-auto" />
                          )}
                        </td>
                      ))
                    : option.buttons.map((status, i) => (
                        <td key={i} className="text-center py-4">
                          {status && (
                            <button className="block w-[80%] max-md:w-[98%] py-4 mx-auto rounded-xl text-white bg-secondery_dash hover:bg-white hover:text-black duration-300">
                              Select Plan
                            </button>
                          )}
                        </td>
                      ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Swiper partners */}
        <SwiperBartners />
      </div>
    </>
  );
}
