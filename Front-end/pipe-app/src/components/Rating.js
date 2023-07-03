import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Rating(props) {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <div className=" mt-6">Rate this game</div>
        <div className=" grid grid-cols-5 gap-1">
          <StarIcon
            className={
              star1 || star2 || star3 || star4 || star5
                ? "h-6 w-6 text-purple-400"
                : "h-6 w-6 text-gray-500"
            }
            onMouseOver={(e) => {
              e.preventDefault();
              setStar1(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setStar1(false);
            }}
          />
          <StarIcon
            className={
              star2 || star3 || star4 || star5
                ? "h-6 w-6 text-purple-400"
                : "h-6 w-6 text-gray-500"
            }
            onMouseOver={(e) => {
              e.preventDefault();
              setStar2(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setStar2(false);
            }}
          />
          <StarIcon
            className={
              star3 || star4 || star5
                ? "h-6 w-6 text-purple-400"
                : "h-6 w-6 text-gray-500"
            }
            onMouseOver={(e) => {
              e.preventDefault();
              setStar3(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setStar3(false);
            }}
          />
          <StarIcon
            className={
              star4 || star5
                ? "h-6 w-6 text-purple-400"
                : "h-6 w-6 text-gray-500"
            }
            onMouseOver={(e) => {
              e.preventDefault();
              setStar4(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setStar4(false);
            }}
          />
          <StarIcon
            className={
              star5 ? "h-6 w-6 text-purple-400" : "h-6 w-6 text-gray-500"
            }
            onMouseOver={(e) => {
              e.preventDefault();
              setStar5(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setStar5(false);
            }}
          />
        </div>
        <div>
          <button className=" bg-green-300 rounded-md px-3 mt-2">
            <span className=" text-black"> Save </span>
          </button>
        </div>
      </div>
    </>
  );
}
