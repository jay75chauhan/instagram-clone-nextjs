import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link
          rel="icon"
          href="https://cdn-icons.flaticon.com/png/512/739/premium/739193.png?token=exp=1634474942~hmac=1a79572b40126239dd445fce9eced7c6"
        />
      </Head>
      <Header />

      <Feed />
      {/* Modal */}
    </div>
  );
}
