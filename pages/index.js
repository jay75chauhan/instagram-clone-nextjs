import { useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { onSnapshot, query, orderBy, collection } from "@firebase/firestore";
import { db } from "../firebase";

export default function Home({ posts }) {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>
          Hii -{session ? session?.user?.username : "instagram 2.0"}
        </title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/747/747562.png"
        />
      </Head>

      <Header />
      <Feed posts={posts} />
      <Modal />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   //get user

//   const posts = await onSnapshot(
//     query(collection(db, "posts"), orderBy("timestamp", "desc")),
//     (snapshot) => {
//       return snapshot.docs;
//     }
//   );
//   const docs = posts.map((post) => ({
//     id: post.id,
//     ...post.data(),
//     timestamp: null,
//   }));
//   return {
//     props: {
//       posts: docs,
//     },
//   };
// }
