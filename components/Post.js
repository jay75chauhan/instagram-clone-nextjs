import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconField } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  doc,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

function Post({ id, userImg, username, img, caption }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState([]);

  // comments
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),

    [db, id]
  );

  // likes

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts", id, "likes"),

        (snapshot) => setLikes(snapshot.docs)
      ),

    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="md:my-7 my-2 border md:rounded-xl bg-white md:shadow-md ">
      <div className="flex items-center p-3 border-b border-gray-400">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border border-t-[#28F19C] border-b-[#02A3F8] border-r-[#15C9CB] border-l-[#15C9CB] p-[1px] mr-3 cursor-pointer"
        />
        <p className="flex-1 font-semibold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      <div className="">
        <img src={img} className="object-cover w-full rounded-sm " />
      </div>

      {session && (
        <div className="flex justify-between border-t pt-4 px-4 border-gray-400">
          <div className="flex space-x-4 ">
            {hasLiked ? (
              <HeartIconField onClick={likePost} className="btn text-red-500" />
            ) : (
              <HeartIcon onClick={likePost} className="btn " />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <div>
            <BookmarkIcon className="btn" />
          </div>
        </div>
      )}

      {/* caption */}

      <p className="px-5 py-3 truncate">
        {likes.length > 0 && <p className="font-bold ">{likes.length} likes</p>}
        <span className="font-semibold mr-1">{username}</span>
        {caption}
      </p>

      {/* commented  */}

      {comments.length > 0 && (
        <div className="ml-8  max-h-20 mb-4 mb:mb-0 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex mx-3 mr-10 items-center space-x-2 mb-3 px-2 py-2 bg-gray-50 rounded-xl"
            >
              <img
                src={comment.data().userImage}
                className="h-5 md:h-7 rounded-full"
              />
              <p className="text-sm flex-1">
                {" "}
                <span className="font-semibold">
                  {comment.data().username}
                </span>{" "}
                {comment.data().comment}{" "}
              </p>
              <Moment className="text-xs text-gray-500" fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input */}
      {session && (
        <form className="flex items-center  p-4">
          <EmojiHappyIcon className="h-7 " />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 outline-none bg-gray-100 p-1.5 pl-6 rounded-full mx-2 "
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
            className={`font-semibold text-white md:px-3 md:py-1.5 md:bg-gray-500  ${
              comment &&
              `md:bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer`
            } md:shadow-lg cursor-not-allowed active:scale-75 transform transition ease-in-out duration-200 rounded-lg`}
          >
            <PaperAirplaneIcon
              className={`md:text-white ${
                comment && `text-blue-400 md:text-white`
              } text-black w-5 h-5 rotate-90 text-center `}
            />
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
