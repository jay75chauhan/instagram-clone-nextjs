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
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-xl border-b  rounded-b-2xl bg-gray-50 top-0 sticky z-50 p-3 lg:p-0">
      <div className="flex justify-between items-center max-w-6xl px-1 lg:mx-auto  ">
        {/* leftL */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-36 h-20 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative lg:hidden flex-shrink-0  w-10 h-10 cursor-pointer"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/747/747562.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}

        <div className="max-w-xs m-1 hidden md:inline-flex ">
          <div className="flex   p-3  shadow items-center hover:border hover:border-black  bg-gray-white rounded-xl">
            <div className="justify-start px-2 ">
              <SearchIcon className="h-5 w-5  text-gray-600" />
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
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white ">
                  3
                </div>
              </div>

              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className=" h-6  cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session.user.image}
                className="h-10 w-10 rounded-full cursor-pointer p-[2px] border-2 border-t-[#28F19C] border-b-[#02A3F8] border-r-[#15C9CB] border-l-[#15C9CB]"
              />
            </>
          ) : (
            <button
              onClick={signIn}
              className="text-semibold text-white  rounded-md shadow active:scale-90 transform transitions ease-out px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
