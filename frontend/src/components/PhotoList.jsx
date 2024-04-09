import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

const PhotoList = ({ likedPhotos, toggleFavorite, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((data, index) => (
        <PhotoListItem 
          key={index} 
          data={data} 
          isLiked={likedPhotos.includes(data.id)} // pass isLiked prop
          toggleFavorite={toggleFavorite} 
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;