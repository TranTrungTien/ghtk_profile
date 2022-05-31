import React from "react";

const Action = () => {
  return (
    <div className="mt-[112px]">
      <ul className="flex justify-between items-center gap-x-2">
        <li>
          <button className="w-8 h-8 grid place-content-center text-red-600 text-3xl">
            <i className="fa-solid fa-heart"></i>
          </button>
        </li>
        <li>
          <button className="w-8 h-8 grid place-content-center text-black text-3xl">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </li>
        <li>
          <button className="w-8 h-8 grid place-content-center text-black text-3xl">
            <i className="fa-solid fa-bookmark"></i>
          </button>
        </li>
        <li>
          <button className="w-8 h-8 grid place-content-center text-black text-3xl">
            <i className="fa-solid fa-flag"></i>
          </button>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Action;
