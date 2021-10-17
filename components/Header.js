import React from "react";
import Image from "next/image";
import {
  ServerIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow border-b bg-transparent backdrop-blur-xl top-0 sticky z-50 p-3 lg:p-0">
      <div className="flex justify-between items-center max-w-6xl mx-5 lg:mx-auto  ">
        {/* leftL */}
        <div className="relative hidden lg:inline-grid w-36 h-20 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden flex-shrink-0  w-10 h-10 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}

        <div className="max-w-xs  ">
          <div className="flex   p-3 shadow items-center hover:border hover:border-black  bg-gray-100 rounded-xl">
            <div className="justify-start px-2 ">
              <SearchIcon className="h-5 w-5  text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-sm lg:text-base "
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white ">
              3
            </div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="https://avatars.githubusercontent.com/u/66429052?v=4"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
