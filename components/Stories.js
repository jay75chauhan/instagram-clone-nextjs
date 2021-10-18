import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestion, Setsuggestion] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    Setsuggestion(suggestion);
  }, []);

  return (
    <div className="flex mx-3 space-x-2 p-6 bg-white mt-8 border rounded-xl shadow-md overflow-scroll scrollbar-thin scrollbar-thumb-gray-800">
      {session && (
        <div className="relative">
          <Story img={session.user.image} usersname={session.user.username} />
          <div className="absolute bottom-4 right-0 ">
            <p className="h-4 w-4 text-white text-sm animate-spin  font-bold shadow-xl rounded-full bg-red-500 flex items-center justify-center ">
              +
            </p>
          </div>
        </div>
      )}
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          usersname={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
