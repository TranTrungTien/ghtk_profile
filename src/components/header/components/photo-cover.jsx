import React from "react";
import photoCover from "../../../assets/photo-cover.jpg";

const PhotoCover = () => {
  return (
    <div className="w-full h-full">
      <img
        src={photoCover}
        alt="Cover"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default PhotoCover;
