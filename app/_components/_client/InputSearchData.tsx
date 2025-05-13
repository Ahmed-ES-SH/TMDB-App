"use client";
import { ShowType } from "@/app/types/websiteTypes";
import React, { ChangeEvent, useEffect, useState } from "react";
import { instance } from "../_globalComponents/AxiosTool";
import { AnimatePresence, motion } from "framer-motion";
import Img from "../_globalComponents/Img";
import { formatTitle } from "@/app/_helpers/helpers";
import { useRouter } from "next/navigation";
import "../../Css/loader.css";

export default function InputSearchData() {
  const router = useRouter();
  const [searchData, setSearchData] = useState<ShowType[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    const fetchSearchData = async () => {
      if (!searchContent.trim()) return;
      try {
        setLoading(true);
        const moviesResponse = await instance.get(
          `/search/movie?query=${searchContent}&include_adult=false&language=en-US&page=1`
        );
        const showsResponse = await instance.get(
          `/search/tv?query=${searchContent}&include_adult=false&language=en-US&page=1`
        );
        const movies = moviesResponse.data?.results || [];
        const shows = showsResponse.data?.results || [];
        setSearchData([...movies, ...shows]);
        // التعامل مع البيانات هنا إذا لزم الأمر
      } catch (error: unknown) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    const timeout = setTimeout(() => {
      fetchSearchData();
    }, 500); // 0.5 ثانية

    if (searchContent.length == 0) {
      setSearchData([]);
    }

    // تنظيف المؤقت عند تغيّر searchContent أو تفادي تسرب الذاكرة
    return () => clearTimeout(timeout);
  }, [searchContent]);

  const handleGo = (media: ShowType) => {
    router.push(
      `/${media.name ? "shows" : "movies"}/${formatTitle(
        media.title || media.name
      )}?currentId=${media.id}`
    );
    setSearchContent("");
    setSearchData([]);
  };

  return (
    <div className="relative w-full">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchContent(e.target.value)
        }
        value={searchContent || ""}
        type="text"
        className=" bg-[#151f30] border-2 border-gray-500 rounded-full py-2 w-full 2xl:w-[350px] placeholder:text-gray-200 placeholder:text-[13px] placeholder:px-6 outline-none px-3 text-gray-200 focus:border-sky-300 duration-300"
        placeholder="i`m looking for ..."
      />
      <AnimatePresence>
        {searchData && searchData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "20%" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="xl:w-[500px] max-md:w-[320px] w-[400px] h-[70vh] flex flex-col gap-3 overflow-y-auto rounded-lg bg-fourth_color p-2 absolute top-16 max-lg:top-[68px]"
          >
            {loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <div className="loader"></div>
              </div>
            ) : (
              searchData.map((media, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }} // تأثير تأخير لتحريك العناصر
                  className="flex items-center justify-between w-full"
                >
                  <div
                    onClick={() => handleGo(media)}
                    className="flex items-start gap-2 group cursor-pointer"
                  >
                    <Img
                      src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                      alt={media.title}
                      className="w-12 object-cover"
                    />
                    <h2 className="text-white group-hover:text-primary_blue">
                      {(media.title || media.name).length > 15
                        ? (media.title || media.name).slice(0, 15) + "..."
                        : media.title || media.name}
                    </h2>
                  </div>
                  <div className=" h-fit p-1 py-2 text-[14px] flex items-center justify-center bg-primary_blue rounded-full text-white">
                    {Number(media.vote_average).toFixed(2)}
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
