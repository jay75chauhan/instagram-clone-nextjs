import React from "react";

function Story({ img, usersname }) {
  return (
    <div>
      <img
        src={img}
        alt="error"
        className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{usersname}</p>
    </div>
  );
}

export default Story;
