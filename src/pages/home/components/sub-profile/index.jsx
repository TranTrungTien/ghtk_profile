import React from "react";
import SubProfileBox from "./sub-profile-box";

const SubProfile = () => {
  return (
    <section className="bg-[#EAEAEA] rounded-xl px-[39px] pt-[47px] pb-[47px]">
      <h2 className="text-[48px] font-semibold leading-[72px]">Profile</h2>

      <SubProfileBox
        title="Personal Infomation"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum
      numquam nisi amet omnis, reprehenderit explicabo corporis placeat sunt.
      Aliquid hic quod beatae animi blanditiis cumque assumenda recusandae
      labore minus."
        icon={<i className="fa-solid fa-arrow-down"></i>}
      />
      <SubProfileBox
        title="Education"
        icon={<i className="fa-solid fa-arrow-right"></i>}
      />
      <SubProfileBox
        title="Hobby"
        icon={<i className="fa-solid fa-arrow-right"></i>}
      />
    </section>
  );
};

export default SubProfile;
