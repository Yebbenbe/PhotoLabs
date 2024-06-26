import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data, isLiked, toggleFavorite, openModal }) => {
  const { id, location, urls, user } = data;
  const { city, country } = location;
  const imageSource = urls.full;
  const { username, profile } = user;

  const handleToggleFavorite = () => {
    toggleFavorite(id);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    //console.log(data);
    if (data) {
      openModal(data);
    } else {
      console.error('Data is undefined or null');
    }
  };

  return (
    <div className="photo-list__item">
        <div className="photo-list__image-container">
        <PhotoFavButton isLiked={isLiked} onClick={handleToggleFavorite} />
        <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} onClick={handleClick} />
        
      </div>
      <div className="photographer-details">
        <div className="photographer-info">
          <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
          <p className="photo-list__user-info">{username}</p>
        </div>
        <p className="photo-list__user-location">{city}, {country}</p>

       {/*} <PhotoFavButton isLiked={isLiked} onClick={handleToggleFavorite} /> */}
      </div>
    </div>
  );
};

export default PhotoListItem;