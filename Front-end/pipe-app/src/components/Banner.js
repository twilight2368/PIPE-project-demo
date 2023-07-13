import { useEffect, useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";

export default function Banner(props) {
  const [showup, setShowup] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3333/randomize")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div
        className="h-full w-full relative"
        onMouseOver={(e) => {
          //console.log("mouse over");
          setShowup(true);
        }}
        onMouseLeave={(e) => {
          //console.log("mouse leave");
          setShowup(false);
        }}
      >
        <div className=" h-full w-full absolute top-0 right-0">
          <img
            src={require("../images/game.jpg")}
            alt=""
            className="h-full w-full rounded-lg"
          />
        </div>
        <div
          className={
            showup
              ? "h-1/3 w-full bg-black-op bottom-0 z-10  duration-300 absolute rounded-b-lg overflow-hidden"
              : "h-0 w-full bg-black-op bottom-0 z-10 duration-200 absolute rounded-b-lg overflow-hidden"
          }
        >
          <div className=" m-2 flex flex-row  justify-start items-center">
            <img
              src={require("../images/game-control.png")}
              alt=""
              className="block h-10 w-auto "
            />
            <div className="mx-6 flex flex-col justify-start items-start">
              <div className=" text-sm">
                {data ? (
                  <Link
                    to={"/all/" + data.game_id}
                    className="no-underline text-white overflow-hidden text-ellipsis"
                  >
                    <span>{data.game_name}</span>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
              <div className=" text-sm">
                {data ? (
                  <Link
                    to={"/developer/" + data.developer_id}
                    className="no-underline text-white overflow-hidden text-ellipsis"
                  >
                    <span>{data.dev_name}</span>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
