import React from "react";
import Wrapper from "../wrapper";
import Avatar from "./components/avatar";
import PhotoCover from "./components/photo-cover";

const Header = () => {
  return (
    <Wrapper>
      <header className="w-full h-[423px] relative">
        <PhotoCover />
        <Avatar />
      </header>
    </Wrapper>
  );
};

export default Header;
