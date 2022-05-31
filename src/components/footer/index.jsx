import React from "react";
import Wrapper from "../wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="bg-[#D1E1D2] px-10 py-5 text-normal text-xl w-full text-center mt-12">
        {new Date().getFullYear()} &copy; copyright. all rights reserved
      </footer>
    </Wrapper>
  );
};

export default Footer;
