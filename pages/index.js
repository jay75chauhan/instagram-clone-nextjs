import { useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Hii -{session ? session.user.username : "instagram 2.0"}</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/747/747562.png"
        />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
