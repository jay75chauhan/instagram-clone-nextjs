import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../../components/Header";

export default function signIn({ providers }) {
  return (
    <div className="h-screen bg-gradient-to-br from-green-600 to-blue-500">
      <Head>
        <title>Instagram Login </title>
        <meta name="description" content="login " />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/747/747562.png"
        />
      </Head>
      <Header />
      <div className=" mt-16  flex  items-center justify-center ">
        <div className="bg-transparent   backdrop-blur-3xl z-20  shadow-2xl  rounded-3xl items-center justify-center p-12 sm:p-24  ">
          <div className=" flex hover:animate-spin  items-center justify-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/747/747562.png"
              height={150}
              width={150}
              object-fit="contain"
            />
          </div>
          <div className="mt-14">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="p-3 bg-gray-800 rounded-lg text-white w-full active:scale-90 transform transition ease-out"
                  onClick={() =>
                    SignIntoProvider(provider.id, { callbackUrl: "/" })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}

            <a
              className=" mt-4  pl-32 text-gray-200 hover:text-gray-300 hover:underline no-underline md:hover:underline text-xs"
              href="https://github.com/jay75chauhan"
              target="_blank"
            >
              @jayChauhan
            </a>
          </div>
        </div>
      </div>

      <p class="absolute bottom-1 text-xs md:text-lg p-3">
        @ this is not a REAL app. it is build for educational purposes only
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
