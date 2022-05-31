import React from "react";

const BaseInfo = () => {
  return (
    <section className="mt-[65px]">
      <header>
        <h1 className="leading-[60px] text-[40px] font-semibold">
          Tran Trung Tien
        </h1>
        <span className="text-[30px] font-medium leading-[45px] opacity-80">
          GHTK Internship
        </span>
      </header>
      <section className="mt-[48px]">
        <ul className="flex justify-start items-start flex-col">
          <li className="w-full py-3 text-2xl">
            <i className="fa-solid fa-location-dot"></i>
            <span className="text-[25px] leading-[29x] ml-8 font-medium">
              Thai Nguyen
            </span>
          </li>
          <li className="w-full py-4 text-2xl">
            <i className="fa-solid fa-mars-and-venus"></i>
            <span className="text-[25px] leading-[29x] ml-8 font-medium">
              Male
            </span>
          </li>
          <li className="w-full py-4 text-2xl">
            <i className="fa-solid fa-calendar"></i>
            <span className="text-[25px] leading-[29x] ml-8 font-medium">
              1999
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default BaseInfo;
