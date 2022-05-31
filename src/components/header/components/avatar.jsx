import React from "react";
import avatar from "../../../assets/nothing.png";
const Avatar = () => {
  return (
    <div className="w-[306px] h-[306px] rounded-full absolute -bottom-1/2 -translate-y-1/3 left-10">
      <img
        src={avatar}
        alt="Avatar"
        className="w-full h-full object-center object-cover rounded-full overflow-hidden"
      />
    </div>
  );
};

export default Avatar;
