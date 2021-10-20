import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Post from "./Post";
import { db } from "../firebase";

// const posts = [
//   {
//     id: "123",
//     username: "jay chauha",
//     userImage: "https://avatars.githubusercontent.com/u/66429052?v=4",
//     img: "https://avatars.githubusercontent.com/u/66429052?v=4",
//     caption: "SUBSCRIP MT",
//   },
//   {
//     id: "123",
//     username: "jay chauha",
//     userImage: "https://avatars.githubusercontent.com/u/66429052?v=4",
//     img: "https://avatars.githubusercontent.com/u/66429052?v=4",
//     caption: "SUBSCRIP MT",
//   },
//   {
//     id: "123",
//     username: "jay chauha",
//     userImage: "https://avatars.githubusercontent.com/u/66429052?v=4",
//     img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     caption: "SUBSCRIP MT",
//   },
// ];

export default function Posts({ posts }) {
  const [postsr, setPostsr] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPostsr(snapshot.docs);
        }
      ),

    [db]
  );

  return (
    <div className="md:mx-2">
      {postsr
        ? postsr?.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              userImg={post.data().profileImg}
              username={post.data().username}
              img={post.data().image}
              caption={post.data().caption}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              userImg={post.data().profileImg}
              username={post.data().username}
              img={post.data().image}
              caption={post.data().caption}
            />
          ))}
    </div>
  );
}
