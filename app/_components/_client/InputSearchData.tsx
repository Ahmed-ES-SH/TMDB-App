"use client";
import { ShowType } from "@/app/types/websiteTypes";
import React, { ChangeEvent, useEffect, useState } from "react";
import { instance } from "../_globalComponents/AxiosTool";
import { motion } from "framer-motion";
import Img from "../_globalComponents/Img";
import Link from "next/link";
import { formatTitle } from "@/app/_helpers/helpers";
import "../../Css/loader.css";

export default function InputSearchData() {
  const [searchData, setSearchData] = useState<ShowType[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchSearchData = async () => {
        try {
          setLoading(true);
          const response = await instance.get(
            `/search/movie?query=${searchContent}&include_adult=false&language=en-US&page=1`
          );
          setSearchData(response.data.results);
          // التعامل مع البيانات هنا إذا لزم الأمر
        } catch (error: unknown) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchSearchData();
    }, 1500); // 1.5 ثانية

    // تنظيف المؤقت عند تغيّر searchContent أو تفادي تسرب الذاكرة
    return () => clearTimeout(timeout);
  }, [searchContent]);

  return (
    <div className="relative">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchContent(e.target.value)
        }
        value={searchContent || ""}
        type="text"
        className="hidden lg:block bg-[#151f30] border-2 border-gray-500 rounded-full py-2 w-[300px] 2xl:w-[350px] placeholder:text-gray-200 placeholder:text-[13px] placeholder:px-6 outline-none px-3 text-gray-200 focus:border-sky-300 duration-300"
        placeholder="i`m looking for ..."
      />
      {searchContent.length > 0 && (
        <div className="w-[500px] h-[70vh] flex flex-col gap-3 overflow-y-auto rounded-lg bg-fourth_color p-2 absolute  -left-3/4 top-16">
          {loading && <div className="loader"></div>}
          {searchData &&
            searchData.map((item, index) => {
              if (searchData.length > 0) {
                return (
                  <motion.div
                    className="flex items-center justify-between w-full"
                    key={index}
                  >
                    <Link
                      href={`/movies/${formatTitle(item.title)}?currentId=${
                        item.id
                      }`}
                      className="flex items-start gap-2 group cursor-pointer"
                    >
                      <Img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        className="w-12 object-cover"
                      />
                      <h2 className="text-white group-hover:text-primary_blue">
                        {item.title.length > 15
                          ? item.title.slice(0, 15) + "..."
                          : item.title}
                      </h2>
                    </Link>
                    <div className="w-8 h-8 text-[14px] flex items-center justify-center bg-primary_blue rounded-full text-white">
                      {Number(item.vote_average).toFixed(2)}
                    </div>
                  </motion.div>
                );
              }
            })}
        </div>
      )}
    </div>
  );
}
