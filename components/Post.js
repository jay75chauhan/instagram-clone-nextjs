import React from "react";

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HandIcon as HeartIconField } from "@heroicons/react/solid";

function Post({ id, userImg, username, img, caption }) {
  return (
    <div className="my-7 border rounded-xl bg-white shadow-md ">
      <div className="flex items-center p-3 border-b border-gray-400">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer"
        />
        <p className="flex-1 font-semibold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      <div className=" p-4">
        <img src={img} className="object-cover w-full rounded-2xl " />
      </div>

      <div className="flex justify-between border-t pt-4 px-4 border-gray-400">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <div>
          <BookmarkIcon className="btn" />
        </div>
      </div>
      {/* caption */}

      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{username}</span>
        {caption}
      </p>

      {/* commented  */}

      {/* input */}
      <form className="flex items-center  p-4">
        <EmojiHappyIcon className="h-7 " />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 outline-none bg-gray-100 p-1.5 pl-3 rounded-full mx-2 "
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
