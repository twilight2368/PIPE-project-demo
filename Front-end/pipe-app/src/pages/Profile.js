import { useState } from "react";


export default function Profile(props) {
  const [changeInfor, setChangeInfor] = useState(false);
  return (
    <>
      <div className="bg-black m-10 mx-auto p-3 w-2/3 rounded-2xl text-white mb-0">
        <div className="mx-auto h-12 mb-0">
          <img
            src={require("../images/logo.png")}
            alt=""
            className="mx-auto h-full w-auto"
          />
        </div>
        <p className="text-center text-sky-300 text-xs">
          &copy;2023 PIPE. All rights reserved.
        </p>
        <div className="flex flex-row m-2 h-10 items-baseline justify-start">
          <label className="mx-4 w-10" htmlFor="username">
            Username:{" "}
          </label>
          <input
            type="text"
            placeholder=""
            value={"Hello world"}
            className="p-2 border-2 border-purple-600 rounded-md bg-gray-600 w-4/5 disabled:opacity-60"
            disabled={changeInfor ? false : true}
            id="username"
          />
        </div>

        <div className="flex flex-row m-2 h-10 items-baseline justify-start">
          <label className="mx-4 w-10" htmlFor="email">
            Email:{" "}
          </label>
          <input
            type="text"
            placeholder=""
            value={"Hello world"}
            className="p-2 border-2 border-purple-600 rounded-md bg-gray-600 w-4/5 disabled:opacity-60"
            disabled={changeInfor ? false : true}
            id="email"
          />
        </div>

        <div className="flex flex-row m-2 h-10 items-baseline justify-start">
          <label className="mx-4 w-10" htmlFor="phone" >Phone: </label>
          <input
            type="text"
            placeholder=""
            value={"010101010101"}
            className="p-2 border-2 border-purple-600 rounded-md bg-gray-600 w-4/5 disabled:opacity-60"
            disabled={changeInfor ? false : true}
            id="phone"
          />
        </div>

        <div className="flex flex-row m-2 h-10 items-baseline justify-start">
          <label className="mx-4 w-10" htmlFor="wallet">Wallet: </label>
          <input
            type="number"
            placeholder=""
            value={1}
            className="p-2 border-2 border-purple-600 rounded-md bg-gray-600 w-1/3 disabled:opacity-60"
            onChange={(e) => {
              e.preventDefault();
            }}
            disabled={changeInfor ? false : true}
            id="wallet"
          />
        </div>

        <div className="flex flex-row m-2 h-10 items-baseline justify-start">
          <button
            className="m-4 mx-4 mt-2 p-1 px-3 bg-purple-600 rounded-lg hover:opacity-80"
            onClick={(e) => {
              setChangeInfor(true);
            }}
          >
            {" "}
            Change
          </button>
          <button
            className="m-4 mx-0 mt-2 p-1 px-3 bg-cyan-300 rounded-lg hover:opacity-60 disabled:hover:cursor-not-allowed disabled:hover:opacity-100"
            disabled={changeInfor ? false : true}
            onClick={(e) => {
              setChangeInfor(false);
            }}
          >
            {" "}
            Save
          </button>
        </div>
      </div>
    </>
  );
}
