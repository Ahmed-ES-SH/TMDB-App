/* eslint-disable react/no-unescaped-entities */
import SwiperBartners from "@/app/_components/_website/_pricing/SwiperBartners";
import React from "react";

export default function Privacypolicy() {
  return (
    <>
      <div className="lg:mt-32 mt-20 custom-container min-h-screen">
        <h1 className="text-gray-200 text-2xl xl:text-5xl mb-12">
          Privacy policy
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
        {/* Points */}
        <div className="text-white text-lg ml-4">
          {/* Point-1 */}
          <h1 className="font-bold">
            1. Determination of personal information of users
          </h1>
          <div className="flex flex-col gap-4 items-start">
            <p className="lg:ml-2">
              2.1. If you are going to use a passage of Lorem Ipsum:
            </p>
            <p className="lg:ml-2">
              2.2. All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <p className="lg:ml-4">
              2.1.1. It uses a dictionary of over 200 Latin words, combined with
              a handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>
            <p className="lg:ml-2">
              2.2.2. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="lg:ml-2">
              2.3.2 Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          {/* Point-2 */}
          <h1 className="font-bold mt-4">
            2. Reasons for collecting and processing user personal information
          </h1>
          <div className="flex flex-col gap-4 items-start">
            <p className="lg:ml-2">
              1.1. If you are going to use a passage of Lorem Ipsum:
            </p>
            <p className="lg:ml-4">
              1.1.1. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <p className="lg:ml-4">
              1.1.2. It uses a dictionary of over 200 Latin words, combined with
              a handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>
            <p className="lg:ml-2">
              1.2. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="lg:ml-2">
              1.3. Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <p className="mt-12">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <SwiperBartners />
      </div>
    </>
  );
}
