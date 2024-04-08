import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  // updated to extract new data
  const { id, location, urls, user } = props.data;
  const { city, country } = location;
  const imageSource = urls.full;
  const { username, profile } = user;

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />

      <div className="photographer-details">
        <div className="photographer-info">
          <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
          <p className="photo-list__user-info">{username}</p>
        </div>
        <p className="photo-list__user-location">{city}, {country}</p>

        <PhotoFavButton />
      </div>
    </div>
  );
}

export default PhotoListItem;
