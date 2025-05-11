import { formatDateTime } from "@/app/_helpers/helpers";
import { ReviewType } from "@/app/types/websiteTypes";
import React from "react";
import { CiUser } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";

interface props {
  review: ReviewType;
}

export default function Review({ review }: props) {
  return (
    <>
      <div className="w-full p-3 rounded-xl bg-fourth_color my-3 text-white">
        <div className="flex flex-col">
          {/* Comment Detailes */}
          <div className="w-full flex items-center justify-between gap-2 pb-4 border-b border-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md">
                <CiUser className="text-primary_blue size-6 md:size-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg">{review.title}</h4>
                <span className="text-[12px]">
                  {formatDateTime(review.date, review.time)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoStarOutline className="text-primary_blue" />
              <span className="text-[14px]">
                {Number(review.rating).toFixed(1)}
              </span>
            </div>
          </div>
          {/* Comment Content */}
          <p className="block my-4 text-lg text-gray-200 leading-12 border-gray-700">
            {review.content}
          </p>
        </div>
      </div>
    </>
  );
}
