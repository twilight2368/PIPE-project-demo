import { useNavigate, NavLink, Link } from "react-router-dom";
export default function Salegame(params) {
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
              navigate("/all/something");
            }}
          >
            404 Not found
          </div>
          <div className=" col-span-3 row-span-2 text-3xl font-extrabold italic flex justify-center items-center salenumber">
            100%
          </div>
          <div
            className=" col-span-5 row-span-1 "
            onClick={(e) => {
              navigate("/developer/something");
            }}
          >
            PIPE
          </div>
        </div>
      </div>
    </>
  );
}
