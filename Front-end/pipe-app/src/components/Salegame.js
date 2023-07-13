import { useNavigate, NavLink, Link } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/outline";
export default function Salegame(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className=" h-full w-10/12 mx-auto bg-purple-op rounded-md p-1">
        <div className="h-full w-full grid grid-cols-10 grid-rows-2">
          <div className=" col-span-2 row-span-2 block flex justify-center items-center">
            <img
              src={require("../images/game-control.png")}
              alt=""
              className=" h-full w-auto"
            />
          </div>

          <div
            className=" col-span-5 row-span-1"
            onClick={(e) => {
              navigate("/all/" + props.game_key);
            }}
          >
            {props.game_name}
          </div>
          <div className=" col-span-3 row-span-2 font-extrabold italic flex flex-row justify-center items-center salenumber">
            <span className="text-3xl">{props.price}</span>
            <span>
              <BoltIcon class="h-6 w-6 text-orange-600" />
            </span>{" "}
          </div>
          <div
            className=" col-span-5 row-span-1 "
            onClick={(e) => {
              navigate("/developer/" + props.dev_key);
            }}
          >
            {props.game_dev}
          </div>
        </div>
      </div>
    </>
  );
}
