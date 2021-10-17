import faker from "faker";
import React, { useState } from "react";
import { useEffect } from "react";

function Suggetions() {
  const [suggestions, SetSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    SetSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 p-5 ml-10 rounded-xl shadow-md bg-white">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-semibold text-gray-400">
          Suggetions for you
        </h3>
        <button className="text-gray-600 font-bold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3 px-2 py-1 hover:shadow-xl hover:bg-gray-200  rounded-xl cursor-pointer transition transform duration-150 ease-out "
        >
          <img
            src={profile.avatar}
            className="w-10 h-10 rounded-full border p-[2px]"
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400 w-30 truncate ">
              Work at {profile.company.name}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggetions;
