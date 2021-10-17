import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

function Stories() {
  const [suggestion, Setsuggestion] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    Setsuggestion(suggestion);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border rounded-xl shadow-md overflow-scroll scrollbar-thin scrollbar-thumb-gray-300">
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
