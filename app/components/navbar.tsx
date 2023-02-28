import { Link } from "@remix-run/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";

const navLinks = [
  // { title: "Projects", type: "component", route: "/projects" },
  { title: "Resume", type: "pdf", route: "/resume.pdf" },
  { title: "About", type: "component", route: "/about" },
  { title: "Notes", type: "component", route: "/notes" },
];

export function NavBar() {

  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const toggleBurger = () => {
    setIsOpenBurger(prev => !prev);
    console.log("hello burger");
  }


  return (
    <div className={`px-5 py-5 lg:mx-auto lg:py-9 max-w-7xl flex justify-between ${isOpenBurger ? "dark:bg-gray-800" : "transparent"}`}>
      <nav className="mx-auto flex flex-row justify-between max-w-3xl lg:max-w-full w-full items-center">
        {/* lg:max-w-8xl items-center justify-between */}
        <div className="lg:flex lg:justify-center lg:gap-4 lg:align-middle">
          <Link
            to="/"
            className="dark:text-white block whitespace-nowrap text-2xl font-medium hover:underline underline-offset-8"
          >
            <h1>Ulysses Kee</h1>
          </Link>
        </div>
        <ul className="hidden lg:flex lg:flex-row">
          {navLinks.map((item) => {
            switch (item.type) {
              case "component": {
                return (
                  <li className="px-5 py-2" key={item.title}>
                    <Link
                      to={`${item.route}`}
                      className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active dark:text-white underline-offset-8"
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              }
              case "pdf": {
                return (
                  <li className="px-5 py-2" key={item.title}>
                    <Link reloadDocument to={item.route}// hard-coded path for fix - Link component does not work
                      className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active dark:text-white underline-offset-8">
                      {item.title}
                    </Link>
                  </li>
                )
              }
            }
          })}
        </ul>
        <button className="px-5 py-2 hidden lg:block">
          <div className="">
            <FaRegMoon className="h-4 w-4 " />
          </div>
        </button>
        <div className="lg:hidden">
          {!isOpenBurger && <Bars3Icon className="h-8 w-8" onClick={toggleBurger} />}
          {isOpenBurger && <XMarkIcon className="h-8 w-8" onClick={toggleBurger} />}
        </div>
      </nav>
      {isOpenBurger && <ul className="absolute top-12 left-0 z-50 min-h-full w-full px-8 py-8 bg-white lg:hidden shadow-gray-800/80 bg-opacity-100 dark:bg-gray-800">
        {navLinks.map((item) => {
          switch (item.type) {
            case "component": {
              return (
                <li className="px-5 py-2 text-center" key={item.title}>
                  <Link
                    to={`${item.route}`}
                    onClick={toggleBurger}
                    className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active dark:text-white underline-offset-8"
                  >
                    {item.title}
                  </Link>
                </li>
              )
            }
            case "pdf": {
              return (
                <li className="px-5 py-2 text-center" key={item.title}>
                  <Link reloadDocument to={item.route}// hard-coded path for fix - Link component does not work
                    className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active dark:text-white underline-offset-8">
                    {item.title}
                  </Link>
                </li>
              )
            }
          }
        })}
      </ul>}
      {/* <ul class="absolute top-12 left-0 z-50 w-full divide-y divide-gray-200 bg-white px-8 py-8 xl:hidden block xl:inline-flex" style="box-shadow: rgba(50, 50, 93, 0.2) 0px 10px 12px -2px, rgba(0, 0, 0, 0.2) 0px 10px 4px -2px;"><div class="group relative py-4 text-center xl:hidden"><p class="mb-2 text-lg text-gray-600">Signed in as</p><p class="text-md truncate font-medium text-gray-900">Ulysses Kee</p><p class="text-md truncate font-medium text-gray-900">ulysseskcw96@gmail.com</p></div><div class="py-4"><div class="flex flex-col items-center space-y-2"><div class="rounded-full bg-discord p-2"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 71 55" fill="none" class="h-5 w-5"><path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z" fill="#fff"></path></svg></div><span class="text-sm font-medium">pepehands#4548</span><a target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=755416123033387179&amp;redirect_uri=https%3A%2F%2Fapi.ethglobal.com%2Fauth%2Fdiscord&amp;response_type=code&amp;scope=identify%20guilds%20guilds.join&amp;state=undefined"><span class="relative cursor-pointer text-center border-2 font-semibold transition-colors duration-200 bg-transparent text-black hover:border-black inline-block rounded-full px-4 py-1.5 ml-2 inline-flex items-center px-2 py-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="mr-2 h-4 w-4 align-middle"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>Reconnect</span></a></div></div><div class="py-4"><li class="group relative text-center"><a class="block items-center space-x-3 py-3.5 text-xl transition-opacity hover:opacity-60 xl:inline-flex xl:py-4 xl:text-[1.1rem]" href="/home"><span>My hackathons</span></a></li><li class="group relative text-center"><a class="block items-center space-x-3 py-3.5 text-xl transition-opacity hover:opacity-60 xl:inline-flex xl:py-4 xl:text-[1.1rem]" href="/events"><span>Events</span></a></li><li class="group relative text-center"><a class="block items-center space-x-3 py-3.5 text-xl transition-opacity hover:opacity-60 xl:inline-flex xl:py-4 xl:text-[1.1rem]" href="/showcase"><span>Showcase</span></a></li><li class="group relative text-center"><a class="block items-center space-x-3 py-3.5 text-xl transition-opacity hover:opacity-60 xl:inline-flex xl:py-4 xl:text-[1.1rem]" href="/talks"><span>Talks</span></a></li><li class="group relative text-center"><a class="block items-center space-x-3 py-3.5 text-xl transition-opacity hover:opacity-60 xl:inline-flex xl:py-4 xl:text-[1.1rem]" href="/guides"><span>Guides</span></a></li></div><li class="group relative pt-8 pb-4 xl:hidden"><span class="flex cursor-pointer items-center justify-center space-x-3 py-3.5 text-xl transition-opacity hover:opacity-60 xl:text-[1.1rem]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="mr-3 h-5 w-5 text-gray-900"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>Sign out</span></li></ul> */}
    </div>
  );
}
