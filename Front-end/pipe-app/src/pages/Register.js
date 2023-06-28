export default function Register(props) {
  return (
    <>
      <div className="bg-black-op m-9 mx-auto w-96 rounded-xl">
        <img
          src={require("../images/logo.png")}
          alt=""
          className=" w-20 mx-auto py-4 pb-0"
        />
        <div className="w-full mx-auto p-6 max-w-xs">
          <form className="bg-black border-4 border-cyan-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="pipe@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-1"
                htmlFor="password"
              >
                Confirm password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-cyan-300">
                <input
                  className="leading-tight mr-2 border-purple-600"
                  type="checkbox"
                />
                <span className=" text-sm">
                  I have read and agree to PIPE's Privacy Policy
                </span>
              </label>
            </div>

            <div className="leading-6 w-auto h-4 mb-2 text-white">
              <span className="error_play">Something went wrong</span>
            </div>
            <div className="flex items-center justify-between">
              <button
                className=" mx-auto bg-cyan-300 border-2 border-purple-600 hover:bg-purple-600 hover:border-cyan-300  text-purple-600 hover:text-cyan-300 font-bold py-1 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-green-300 text-xs">
            &copy;2023 PIPE. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
