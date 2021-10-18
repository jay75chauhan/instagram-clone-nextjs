import React from "react";
import { useSession, signOut } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center  justify-between mt-8 rounded-xl shadow-md ml-10 bg-white p-8">
      <img
        src={session?.user?.image}
        alt=""
        className="w-16 h-16 rounded-full  p-[2px] border-[3px] border-t-[#28F19C] border-b-[#02A3F8] border-r-[#15C9CB] border-l-[#15C9CB]"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-semibold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
