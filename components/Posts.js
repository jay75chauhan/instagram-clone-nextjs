import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "jay chauha",
    userImage: "https://avatars.githubusercontent.com/u/66429052?v=4",
    img: "https://avatars.githubusercontent.com/u/66429052?v=4",
    caption: "SUBSCRIP MT",
  },
  {
    id: "123",
    username: "jay chauha",
    userImage: "https://avatars.githubusercontent.com/u/66429052?v=4",
    img: "https://avatars.githubusercontent.com/u/66429052?v=4",
    caption: "SUBSCRIP MT",
  },
  {
    id: "123",
    username: "jay chauha",
    userImage: "https://avatars.githubusercontent.com/u/66429052?v=4",
    img: "https://avatars.githubusercontent.com/u/66429052?v=4",
    caption: "SUBSCRIP MT",
  },
];

function Posts() {
  return (
    <div>
      <Post />
    </div>
  );
}

export default Posts;
