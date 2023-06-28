import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
  Menu,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Footer from "./Footer";
import { useNavigate, NavLink } from "react-router-dom";

const products = [
  {
    name: "Search",
    description: "PIPE",
    href: "/search",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Categories",
    description: "PIPE",
    href: "/categories",
    icon: TagIcon,
  },
  {
    name: "All games",
    description: "PIPE",
    href: "/all",
    icon: RocketLaunchIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-black-op">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">PIPE game store</span>
              <img
                className="h-14 w-full mx-auto"
                src={require("../images/logo.png")}
                alt=""
                onClick={(e) => {
                  navigate("/");
                }}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            <NavLink
              to={"/"}
              key={"Home"}
              className=" text-sm font-semibold leading-6 text-white no-underline active:no-underline px-4 focus:bg-purple-500 focus:rounded-xl focus:outline-none focus:shadow-outline"
            >
              Home
            </NavLink>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 px-2 text-sm font-semibold leading-6 text-white focus:bg-purple-500 focus:rounded-xl focus:outline-none focus:shadow-outline">
                Games
                <ChevronDownIcon
                  className=" h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-36 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black-op shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-2">
                    {products.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-purple-600 no-underline active:no-underline "
                      >
                        <div className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-black-op group-hover:bg-purple-600">
                          <item.icon
                            className="h-6 w-6 text-gray-100 group-hover:text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <span className="block font-semibold text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </span>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <NavLink
              to={"/charts"}
              key={"Charts"}
              className=" text-sm font-semibold leading-6 text-white no-underline active:no-underline px-4 focus:bg-purple-500 focus:rounded-xl focus:outline-none focus:shadow-outline"
            >
              Charts
            </NavLink>
            <NavLink
              to={"/collections"}
              key={"Collections"}
              className=" text-sm font-semibold leading-6 text-white no-underline active:no-underline px-3 focus:bg-purple-500 focus:rounded-xl focus:outline-none focus:shadow-outline"
            >
              Collections
            </NavLink>
          </Popover.Group>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {loggedin ? (
              <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={require("../images/gamer-female.png")}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-black-op py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-purple-400 rounded-lg hover:text-black"
                                : "",
                              "block px-4 py-2 text-sm text-gray-300 no-underline"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-purple-400 rounded-lg hover:text-black"
                                : "",
                              "block px-4 py-2 text-sm text-gray-300 no-underline"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            ) : (
              <>
                <button
                  className="text-sm font-semibold leading-6 mx-2 btn-signup p-1"
                  onClick={(e) => {
                    navigate("/signup");
                  }}
                >
                  Sign up
                </button>
                <button
                  className="text-sm font-semibold leading-6 mx-2 btn-login p-1"
                  onClick={(e) => {
                    navigate("/login");
                  }}
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src={require("../images/logo.png")}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  {loggedin ? (
                    <>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white no-underline hover:bg-purple-600"
                      >
                        My account
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white no-underline hover:bg-purple-600"
                      >
                        Log out
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white no-underline hover:bg-purple-600"
                      >
                        Sign up
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white no-underline hover:bg-purple-600"
                      >
                        Log in
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </>
  );
}
