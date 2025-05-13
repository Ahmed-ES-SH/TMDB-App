"use client";
import { Itemcomments, Reviews } from "@/app/constants/website";
import React, { useState } from "react";
import Comment from "./Comment";
import Review from "./Review";
import { motion } from "framer-motion";
import { commentType, ReviewType, ShowType } from "@/app/types/websiteTypes";
import Pagination from "../../_globalComponents/Pagination";
import { CgNotifications } from "react-icons/cg";
import MovieCard from "../../_website/_movies/MediaCard";
import { useData } from "@/app/context/DataContext";
import AddReview from "../mediaPage/AddReviewOrComment";

interface props {
  data: ShowType[];
}

export default function MediaCommentsAndReviews({ data }: props) {
  const { genres } = useData();
  const [comments, setComments] = useState<commentType[]>(Itemcomments);
  const [reviews, setReviews] = useState<ReviewType[]>(Reviews);
  const [showState, setShowState] = useState<"comments" | "reviews">(
    "comments"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState("");
  const [reviewRating, setReviewRating] = useState<number | string>("");
  const [reviewTitle, setReviewTitle] = useState<string>("");

  const ITEMS_PER_PAGE = 7;

  const dataToShow = showState === "comments" ? comments : reviews;
  const totalPages = Math.ceil(dataToShow.length / ITEMS_PER_PAGE);

  const currentItems = dataToShow.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // إعادة تعيين الصفحة عند التبديل بين التعليقات والمراجعات
  const switchView = (view: "comments" | "reviews") => {
    setShowState(view);
    setCurrentPage(1);
  };

  const handleAdd = () => {
    const now = Date.now();
    if (showState == "comments") {
      const newComment = {
        content: content,
        author: "user_12",
        date: now,
        time: now,
        likes: 0,
        dislikes: 0,
      };

      setComments((prev) => [...prev, newComment]);
    } else {
      const newReview = {
        content: content,
        title: "user_12",
        date: now,
        time: now,
        rating: reviewRating,
      };

      setReviews((prev) => [...prev, newReview]);
      setReviewRating("");
      setReviewTitle("");
    }

    setCurrentPage(totalPages);
    setContent("");
  };

  return (
    <div className="w-full min-h-screen bg-secondery_dash">
      <div className="custom-container flex items-start justify-between flex-col gap-4  2xl:flex-row 2xl:gap-12">
        {/* comments&reviews */}
        <div
          id="comments&reviews"
          className="pt-6 border-t border-gray-700 w-full xl:flex-[40%] mt-4"
        >
          {/* Header */}
          <div className="flex items-center gap-6 my-3">
            <div
              onClick={() => switchView("comments")}
              className={`flex items-center gap-3 text-white hover:text-primary_blue cursor-pointer duration-300 ${
                showState === "comments" ? "opacity-100" : "opacity-50"
              }`}
            >
              <h3 className="text-xl">Comments</h3>
              <span className="w-5 h-5 text-[14px] rounded-md bg-primary_blue text-white text-center block">
                {comments.length}
              </span>
            </div>
            <div
              onClick={() => switchView("reviews")}
              className={`flex items-center gap-3 text-white hover:text-primary_blue cursor-pointer duration-300 ${
                showState === "reviews" ? "opacity-100" : "opacity-50"
              }`}
            >
              <h3 className="text-xl">Reviews</h3>
              <span className="w-5 h-5 text-[14px] rounded-md bg-primary_blue text-white text-center block">
                {reviews.length}
              </span>
            </div>
          </div>

          {/* Content */}
          {showState === "comments" &&
            currentItems.map((comment, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-full"
                key={index}
              >
                <Comment comment={comment as commentType} />
              </motion.div>
            ))}

          {showState === "reviews" &&
            currentItems.map((review, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-full"
                key={index}
              >
                <Review review={review as ReviewType} />
              </motion.div>
            ))}

          {/* Pagination Controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />

          {/* Add review Or Comment  */}
          <AddReview
            showState={showState}
            content={content}
            setContent={setContent}
            reviewRating={reviewRating}
            reviewTitle={reviewTitle}
            setReviewRating={setReviewRating}
            setReviewTitle={setReviewTitle}
            handleAdd={handleAdd}
          />
        </div>

        <div id="right" className="w-full 2xl:flex-1 mt-4">
          {/* subscribe-form */}
          <div
            id="subscribe-form"
            className="border border-gray-600 px-2 py-4 rounded-xl flex items-center justify-center "
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center gap-2">
                <CgNotifications className="size-12 text-primary_blue" />
                <p className="text-white text-2xl max-md:text-lg">
                  Notifications
                </p>
              </div>
              <p className="text-gray-300">
                Subscribe to notifications about new episodes
              </p>
              <input
                type="email"
                placeholder="Email .... "
                className="w-full p-2 rounded-xl border-none bg-fourth_color text-gray-200 outline-none border border-transparent focus-within:border-primary_blue placeholder:text-white placeholder:font-light placeholder:px-2"
              />
              <button
                type="submit"
                className="w-full px-2 py-3 hover:bg-white hover:text-black duration-300 rounded-xl bg-primary_blue text-white flex items-center justify-center"
              >
                Send
              </button>
            </div>
          </div>
          {/* Coming Soon */}
          <div id="upComing-items">
            <h1 className="my-3 text-3xl text-gray-100 pb-2 border-b border-primary_blue w-fit mx-auto hidden 2xl:block">
              {data[0].name ? "Popular Shows" : "Coming Soon"}
            </h1>
            <div className="grid-cols-1 gap-3 mt-4 hidden 2xl:grid ">
              {data &&
                data.slice(0, 3).map((media, index) => {
                  const matchedGenres =
                    genres &&
                    media &&
                    genres.filter(
                      (genre) =>
                        genre.id !== null && media.genre_ids.includes(genre.id)
                    );
                  return (
                    <MovieCard
                      key={index}
                      media={media}
                      genres={matchedGenres}
                      index={index}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
