import { Dispatch, SetStateAction } from "react";

interface props {
  showState: string;
  reviewTitle: string;
  setReviewTitle: Dispatch<SetStateAction<string>>;
  setReviewRating: Dispatch<SetStateAction<number | string>>;
  reviewRating: number | string;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  handleAdd: () => void;
}

interface VariableContentType {
  comments: {
    placeHolder: string;
    height: string;
  };
  reviews: {
    placeHolder: string;
    height: string;
  };
}

export default function AddReviewOrComment({
  showState,
  reviewTitle,
  setReviewTitle,
  setReviewRating,
  reviewRating,
  content,
  setContent,
  handleAdd,
}: props) {
  const handleRatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // تحقق أن القيمة رقمية أو فارغة (لسماح بالمحو)
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      const num = parseFloat(value);

      // تحقق أن الرقم ≤ 10 وأن بعد الفاصلة لا يتجاوز رقمين
      if (
        value === "" ||
        (!isNaN(num) &&
          num <= 10 &&
          (!value.includes(".") || value.split(".")[1].length <= 2))
      ) {
        setReviewRating(value);
      }
    }
  };

  const VariableContent: VariableContentType = {
    comments: {
      placeHolder: "Comment ...",
      height: "h-[20vh]",
    },

    reviews: {
      placeHolder: "Review ...",
      height: "h-[15vh]",
    },
  };
  return (
    <>
      <div
        id="add-review"
        className="border border-gray-600 px-2 py-4 rounded-xl mt-4 flex flex-col gap-5  w-full bg-thired_dash overflow-hidden "
      >
        {showState == "reviews" && (
          <div className="flex items-center justify-between w-full max-md:flex-col gap-4 2xl:gap-8">
            <input
              className="max-md:w-full 2xl:flex-2/3 p-2 rounded-xl bg-fourth_color text-gray-200 border-none outline-none placeholder:text-white placeholder:font-light placeholder:px-2 focus:ring-2 focus:ring-sky-300 duration-300"
              type="text"
              placeholder="Review Title .... "
              name="review_title"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
            />
            <input
              placeholder="rating ..."
              value={reviewRating}
              onChange={handleRatChange}
              max={10}
              type="text"
              className=" max-md:w-full  2xl:flex-1 p-2 rounded-xl bg-fourth_color text-gray-200 border-none outline-none placeholder:text-white placeholder:font-light placeholder:px-2 focus:ring-2 focus:ring-sky-300 duration-300"
            />
          </div>
        )}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={
            VariableContent[showState as keyof VariableContentType].placeHolder
          }
          className={`w-full ${
            VariableContent[showState as keyof VariableContentType].height
          } p-2 rounded-xl  bg-fourth_color text-gray-200   outline-none  placeholder:text-white placeholder:font-light placeholder:px-2 focus:ring-2 focus:ring-sky-300 duration-300`}
        />
        <button
          onClick={handleAdd}
          type="submit"
          className="w-full px-2 py-3 hover:bg-sky-500  duration-300 rounded-xl bg-primary_blue text-white flex items-center justify-center "
        >
          Send
        </button>
      </div>
    </>
  );
}
