export default function Footer(props) {
  return (
    <>
      <footer className="bottom-0 left-0 z-20 w-full p-8 py-0 bg-black-op  md:flex md:items-center md:justify-between md:p-6">
        <div className="h-full px-0">
          <img
            src={require("../images/logo.png")}
            alt=""
            className="h-12 mx-auto m-2 block"
          />
          <a className=" text-white m-2 mx-4 p-0 px-1 no-underline max-lg:hidden text-xs btn-top">
            Back to top
          </a>
        </div>
        <div className="grid grid-rows-2">
          <ul className="grid grid-rows-1 grid-cols-4 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <span className="mr-4 hover:underline md:mr-6 max-lg:hidden">
                About
              </span>
            </li>
            <li>
              <span className="mr-4 hover:underline md:mr-6 max-lg:hidden">
                Privacy Policy
              </span>
            </li>
            <li>
              <span className="mr-4 hover:underline md:mr-6 max-lg:hidden">
                Licensing
              </span>
            </li>
            <li>
              <span className="hover:underline max-lg:hidden">Contact</span>
            </li>
          </ul>
          <span className=" text-center text-gray-500 dark:text-gray-400 mx-auto">
            © 2023 PIPE game store. All Rights Reserved.
          </span>
        </div>
      </footer>  
    </>
  );
}
