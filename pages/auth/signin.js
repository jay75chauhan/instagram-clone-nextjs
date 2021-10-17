import { getProviders } from "next-auth/react";
import React from "react";

function signIn({ providers }) {
  return <div></div>;
}

export async function getServerSideProps(context) {
  //get user
  const providers = getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
