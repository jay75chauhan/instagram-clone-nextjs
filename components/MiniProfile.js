import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center  justify-between mt-8 rounded-xl shadow-md ml-10 bg-white p-8">
      <img
        src="https://avatars.githubusercontent.com/u/66429052?v=4"
        alt=""
        className="w-16 h-16 rounded-full p-[2px] "
      />
      <div className="flex-1 mx-4">
        <h2 className="font-semibold">jay chauhan</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
