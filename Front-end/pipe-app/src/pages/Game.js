export default function Game(params) {
  return (
    <>
      <div>
        <div className=" m-24 my-6">
          <div className=" h-60 bg-black-op grid grid-cols-2 rounded-2xl px-6 py-4">
            <div className=" text-white">
              <div className=" text-3xl">404 NOT FOUND</div>
              <div className=" text-xl">PIPE</div>
              <div>
                <span className=" text-lg">Category: </span>
                <span className="mr-1">#hastag</span>
                <span className="mr-1">#hastag</span>
                <span className="mr-1">#hastag</span>
                <span className="mr-1">#hastag</span>
              </div>
              <div className="mt-4">
                <span className=" mr-6">
                  <button className="bg-blue-400 p-1 px-2 rounded-md hover:cursor-not-allowed">
                    Download
                  </button>
                </span>
                <span className=" mr-6">
                  <button className="bg-pink-400 p-1 px-2 rounded-md hover:cursor-not-allowed">
                    Add to wishlist
                  </button>
                </span>
              </div>
            </div>
            <div className=" text-white">1</div>
          </div>
        </div>
      </div>
    </>
  );
}
