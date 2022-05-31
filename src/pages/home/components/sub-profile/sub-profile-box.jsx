import React from "react";

const SubProfileBox = ({ title, content, icon }) => {
  return (
    <div className="mt-[33px] bg-white rounded-md relative">
      <button className="absolute right-5 top-5 rounded-full bg-white w-8 h-8 grid place-content-center">
        {icon}
      </button>
      <h4 className="text-[25px] font-medium leading-[38px] text-white bg-[#335436] px-6 py-4 rounded-md">
        {title}
      </h4>
      {content && (
        <div className="mt-[16px] ml-[33px] mr-[91px] pb-[47px] ">
          <p className="text-xl font-normal leading-[30px]">{content}</p>
        </div>
      )}
    </div>
  );
};

export default SubProfileBox;
