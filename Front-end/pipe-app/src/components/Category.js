import { Link } from "react-router-dom";

export default function Category(props) {
  return (
    <>
      <div className=" text-white w-2/3 h-36 bg-black border-purple-500 rounded-lg border-4">
        <div className=" p-2 grid grid-rows-6 h-full">
          <div className=" row-span-4">
            <img
              src={require("../images/game.jpg")}
              alt=""
              className="block h-full w-auto mx-auto rounded-lg"
            />
          </div>
          <div className="mt-2 mx-auto text-xl bold">
            <Link
              to={"/category/" + props.genre_key}
              className=" text-xl no-underline text-white"
            >
              {" "}
              {props.name}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
