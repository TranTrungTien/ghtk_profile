import React from "react";
import myPicture from "../../../../assets/nothing.png";
const MyPictureGroup = () => {
  return (
    <div className="mt-6">
      <ul className="flex flex-col justify-start items-start gap-y-4">
        <li className="w-[322px] h-[322px] rounded-md">
          <img
            src={myPicture}
            alt={"myPicture"}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </li>
        <li className="w-[322px] h-[322px] rounded-md">
          <img
            src={myPicture}
            alt={"myPicture"}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </li>
        <li className="w-[322px] h-[322px] rounded-md">
          <img
            src={myPicture}
            alt={"myPicture"}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </li>
      </ul>
    </div>
  );
};

export default MyPictureGroup;
