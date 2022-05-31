import React from "react";
import Wrapper from "../../../../components/wrapper";
import Action from "../action";
import BaseInfo from "../base-info";
import LeftContainer from "../left-container";
import MoreDetail from "../more-detail";
import MyPictureGroup from "../my-picture-group";
import RightContainer from "../right-container";
import SubProfile from "../sub-profile";

const Main = () => {
  return (
    <Wrapper>
      <main className="flex justify-center items-start gap-x-[55px] pt-[62px]">
        <LeftContainer>
          <BaseInfo />
          <Action />
          <MyPictureGroup />
        </LeftContainer>
        <RightContainer>
          <SubProfile />
          <MoreDetail />
        </RightContainer>
      </main>
    </Wrapper>
  );
};

export default Main;
