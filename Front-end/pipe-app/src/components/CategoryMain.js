import { useState } from "react";
import Game from "./Game";
import { Link } from "react-router-dom";

export default function Categorymain(props) {
  const [item1, setItem1] = useState(true);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className=" w-full bg-black-op rounded-xl mt-4">
        <div className=" bg-black h-12 rounded-xl px-3 relative">
          <nav className=" h-full flex gap-2 justify-start items-center">
            <div className=" h-full w-1/12 mr-3 flex justify-center items-center">
              <img
                src={require("../images/pipelogo.png")}
                alt=""
                className=" block h-full w-auto"
              />
            </div>
            <button
              className={classNames(
                item1
                  ? "bg-rose-500 px-2 h-1/3 rounded-full flex justify-center items-center"
                  : "px-2 h-1/3 rounded-full flex justify-center items-center hover:bg-slate-800 hover:opacity-60"
              )}
              onClick={(e) => {
                setItem1((prevItem) => true);
                setItem2((prevItem) => false);
                setItem3((prevItem) => false);
                setItem4((prevItem) => false);
              }}
            >
              #hastag1
            </button>
            <button
              className={classNames(
                item2
                  ? "bg-sky-500 px-2 h-1/3 rounded-full flex justify-center items-center"
                  : "px-2 h-1/3 rounded-full flex justify-center items-center hover:bg-slate-800 hover:opacity-60"
              )}
              onClick={(e) => {
                setItem1((prevItem) => false);
                setItem2((prevItem) => true);
                setItem3((prevItem) => false);
                setItem4((prevItem) => false);
              }}
            >
              #hastag2
            </button>
            <button
              className={classNames(
                item3
                  ? "bg-green-500 px-2 h-1/3 rounded-full flex justify-center items-center"
                  : "px-2 h-1/3 rounded-full flex justify-center items-center hover:bg-slate-800 hover:opacity-60"
              )}
              onClick={(e) => {
                setItem1((prevItem) => false);
                setItem2((prevItem) => false);
                setItem3((prevItem) => true);
                setItem4((prevItem) => false);
              }}
            >
              #hastag3
            </button>
            <button
              className={classNames(
                item4
                  ? "bg-orange-500 px-2 h-1/3 rounded-full flex justify-center items-center"
                  : "px-2 h-1/3 rounded-full flex justify-center items-center hover:bg-slate-800 hover:opacity-60"
              )}
              onClick={(e) => {
                setItem1((prevItem) => false);
                setItem2((prevItem) => false);
                setItem3((prevItem) => false);
                setItem4((prevItem) => true);
              }}
            >
              #hastag4
            </button>
          </nav>

          <div className="absolute top-1/2 right-0 -translate-x-10 -translate-y-1/2">
            <Link
              to={"/categories"}
              className=" text-gray-400 hover:opacity-75"
            >
              All categories
            </Link>
          </div>
        </div>
        <div
          className={
            "w-full h-44 rounded-b-xl pb-0 pt-2 p-4 grid grid-cols-4 gap-3 border-b-4 " +
            classNames(item1 ? "border-rose-500" : "") +
            classNames(item2 ? "border-sky-500" : "") +
            classNames(item3 ? "border-green-500" : "") +
            classNames(item4 ? "border-orange-500" : "")
          }
        >
          <div className=" h-36">
            <Game />
          </div>
          <div className=" h-36">
            <Game />
          </div>
          <div className=" h-36">
            <Game />
          </div>
          <div className=" h-36">
            <Game />
          </div>
        </div>
      </div>
    </>
  );
}
