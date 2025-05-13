import { formatDateTime } from "@/app/_helpers/helpers";
import { commentType } from "@/app/types/websiteTypes";
import React from "react";
import { CiUser } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { MdOutlineTurnRight } from "react-icons/md";
import { RxLoop } from "react-icons/rx";

interface props {
  comment: commentType;
}

export default function Comment({ comment }: props) {
  return (
    <>
      <div className="w-full p-3  rounded-xl bg-fourth_color my-3 text-white">
        <div className="flex flex-col">
          {/* Comment Detailes */}
          <div className="w-full flex items-start gap-3 pb-4 border-b border-gray-700">
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md">
              <CiUser className="text-primary_blue size-6 md:size-8" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[13px]">{comment.author}</h4>
              <span className="text-[12px]">
                {formatDateTime(comment.date, comment.time)}
              </span>
            </div>
          </div>
          {/* Comment Content */}
          <p className="block my-4 text-lg text-gray-200 leading-6 pb-4 border-b border-gray-700 max-sm:text-[13px]">
            {comment.content}
          </p>
          {/* Comment Actions */}
          <div className=" flex items-center justify-between max-sm:flex-col max-sm:gap-4 w-full">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg flex items-center justify-center bg-transparent border  cursor-pointer border-green-300 text-green-300 hover:text-green-500 hover:border-green-500 duration-300">
                  <GoPlus className="size-4" />
                </div>
                <span className="text-[14px] text-gray-300">
                  {comment.likes}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-gray-300">
                  {comment.dislikes}
                </span>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center bg-transparent border  cursor-pointer border-red-300 text-red-300 hover:text-red-500 hover:border-red-500 duration-300">
                  <HiOutlineMinus className="size-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary_blue duration-300">
                <MdOutlineTurnRight className="text-primary_blue" />
                <p>Reply</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary_blue duration-300">
                <RxLoop className="text-primary_blue" />
                <p>Quote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
