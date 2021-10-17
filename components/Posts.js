import React from "react";
import Post from "./Post";

const posts = [
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
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    caption: "SUBSCRIP MT",
  },
];

function Posts() {
  return (
    <div className="mx-3">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userImg={post.userImage}
          username={post.username}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
