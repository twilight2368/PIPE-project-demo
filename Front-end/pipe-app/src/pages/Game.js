import { StarIcon } from "@heroicons/react/20/solid";
import { BoltIcon } from "@heroicons/react/24/outline";
import Rating from "../components/Rating";
import { useNavigate, Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Game(props) {
  const navigate = useNavigate();
  const [mydata, setMydata] = useState();
  const [genre, setGenre] = useState();
  let {id} = useParams();

  useEffect(()=>{
    //console.log(id);
    fetch("http://localhost:3333/all/" + id)
    .then((response) => { console.log(response.status); return response.json()})
    .then((data)=> {
      console.log(data)
      setMydata(data[0]);
    }).catch((e)=>{
      console.log(e)
    });
  }, [])

  useEffect(() => {
    //console.log(id);
    fetch("http://localhost:3333/categoryforgame/" + id)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGenre(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {mydata ? (
        <>
          <div>
            <div className=" m-24 my-6">
              <div className=" h-60 bg-black-op grid grid-cols-2 rounded-2xl">
                <div className=" text-white  px-6 py-4">
                  <div className=" text-3xl">{mydata.game_name}</div>
                  <Link to={"/developer/" + mydata.developer_id} className="text-white no-underline text-xl"> {mydata.dev_name}</Link>
                  <div>
                    <span className=" text-lg">Category: </span>
                    {
                      genre ? <>{genre.map((e)=>{
                          return (
                            <>
                              <Link to={'/category/' + e.genre_id} className="mr-1 text-lg overflow-hidden text-white no-underline text-ellipsis"> #{e.genre_name} </Link>
                            </>
                          );
                      })}</> : <></>
                    }
                  </div>
                  <div className="mt-2">
                    <span className=" text-black px-2 p border-2 bg-orange-400 border-orange-600 rounded-xl">
                      <BoltIcon class="h-3 w-3 inline mr-1" />
                      <span className=" font-semibold italic">
                        {mydata.price === "0.00" ? (
                          <>
                            <span>free</span>
                          </>
                        ) : (
                          <>{mydata.price}</>
                        )}
                      </span>
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className=" mr-6">
                      <button
                        className="bg-blue-400 p-1 px-2 rounded-md disabled:hover:cursor-not-allowed"
                        disabled
                      >
                        Download
                      </button>
                    </span>
                    <span className=" mr-6">
                      <button
                        className="bg-pink-400 p-1 px-2 rounded-md disabled:hover:cursor-not-allowed"
                        disabled
                      >
                        Add to wishlist
                      </button>
                    </span>
                  </div>
                </div>
                <div className=" text-white h-full w-full p-0 relative">
                  <img
                    src={require("../images/game.jpg")}
                    alt=""
                    className=" h-60 w-full rounded-e-2xl"
                  />
                  <div className=" h-full w-full absolute bg-faded-black rounded-e-2xl top-0 z-[1]"></div>
                </div>
              </div>
              <div className="text-white h-52 bg-black-op mt-2 grid grid-cols-2 rounded-2xl px-6 py-4">
                <div>
                  <div>Details:</div>
                  <ul className="list-disc">
                    <li>
                      <span>Downloaded: {mydata.downloaded} </span>
                    </li>
                    <li>
                      <span>
                        Release Date: {mydata.release_date.split("T")[0]}{" "}
                      </span>
                    </li>
                    <li>
                      <span>Version: {mydata.ver} </span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-3">
                  <div className=" col-span-2 p-4">
                    <div className=" W-full h-full">
                      <Rating />
                    </div>
                  </div>
                  <div className=" flex justify-center items-center">
                    <div className="h-12 w-12 flex justify-end items-baseline">
                      <span className=" text-6xl">
                        {mydata.rating ? mydata.rating : <>-:-</>}
                      </span>
                    </div>
                    <div className="h-12 w-12 flex justify-center items-center">
                      <StarIcon className="h-12 w-12 text-yellow-500 block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
