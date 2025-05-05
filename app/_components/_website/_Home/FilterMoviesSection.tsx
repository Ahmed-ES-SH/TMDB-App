"use client";
import React, { useEffect, useRef, useState } from "react";
import { useVariables } from "@/app/context/VariablesContext";

interface categoryType {
  text: "Popular" | "Upcoming" | "now_playing";
  handle: () => void;
}

export default function FilterMoviesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { setCurrentCategory, currentCategory } = useVariables();

  const Categories: categoryType[] = [
    {
      text: "Popular",
      handle: () => setCurrentCategory("Popular"),
    },
    {
      text: "Upcoming",
      handle: () => setCurrentCategory("Upcoming"),
    },
    {
      text: "now_playing",
      handle: () => setCurrentCategory("now_playing"),
    },
  ];

  // const { genres } = useData();
  // const [selectedGenre, setSelectedGenre] = useState<string>("All genres");
  // const [dropState, setDropState] = useState(false);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });

  // const hnadleselectGenre = (genre: string) => {
  //   setSelectedGenre(genre);
  //   setDropState(false);
  // };

  const hnadleSelectCategory = (
    cat: "Popular" | "Upcoming" | "now_playing"
  ) => {
    setCurrentCategory(cat);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const selected = containerRef.current.querySelector(
      `[data-cat="${currentCategory}"]`
    ) as HTMLElement;
    if (selected) {
      const { offsetLeft, offsetWidth } = selected;
      setBgStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [currentCategory]);

  return (
    <>
      <div className="custom-container h-[70px] bg-fourth_color rounded-xl p-2 flex items-center justify-center mt-6">
        <div className="flex items-center justify-between w-[97%] max-md:w-full mx-auto">
          {/* <div className="relative">
            <div
              onClick={() => setDropState((prev) => !prev)}
              className="flex items-center gap-1 text-white hover:text-primary_blue duration-300 cursor-pointer relative"
            >
              <p className="text-[15px] ">{selectedGenre}</p>
              <IoIosArrowDown className="size-4" />
            </div>
            <AnimatePresence>
              {dropState && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="w-[180px] h-[200px] absolute top-8 overflow-y-auto p-2 rounded-md bg-thired_dash text-white z-[20]"
                >
                  <ul>
                    {genres &&
                      [{ id: 3242, name: "All genres" }, ...genres].map(
                        (genre) => (
                          <li
                            onClick={() => hnadleselectGenre(genre.name)}
                            className="p-1 hover:text-primary_blue duration-200 cursor-pointer"
                            key={genre.id}
                          >
                            {genre.name}
                          </li>
                        )
                      )}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}
          <div className="hidden lg:block"></div>
          <div
            ref={containerRef}
            className="flex items-center max-xl:justify-between max-md:w-full gap-6 w-fit px-4 py-3 rounded-2xl bg-thired_dash relative"
          >
            {/* Animation backGround */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[32px]   bg-gray-300 opacity-10 rounded-xl transition-all duration-300"
              style={{
                left: `calc(${bgStyle.left}px - 4px)`,
                width: `calc(${bgStyle.width}px + 10px)`,
              }}
            ></div>

            {Categories.map((cat, index) => (
              <div
                key={index}
                onClick={() => hnadleSelectCategory(cat.text)}
                data-cat={cat.text}
                className={`relative z-10 cursor-pointer hover:text-primary_blue duration-200 ${
                  currentCategory == cat.text
                    ? "text-primary_blue"
                    : "text-white"
                }`}
              >
                <p>{cat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
