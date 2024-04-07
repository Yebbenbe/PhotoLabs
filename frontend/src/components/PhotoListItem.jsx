import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const { data } = props;
  // extract data from the sample data object via destructuring
  const { id, location, imageSource, username, profile } = data;


  return (
    <div className="photo-list_item">
      {/* display the image */}
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />

      <div className="photographer-details">
        <div className="photographer-info">
          <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
          <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </div>
    </div>
  );
}

export default PhotoListItem;
