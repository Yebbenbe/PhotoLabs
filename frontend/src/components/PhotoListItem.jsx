import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const { data } = props;
  // extract data from the sample data object via destructuring
  const { id, location, imageSource, username, profile } = data;


  return (
    <div className="photo-list-item">
      {/* display the image */}
      <img src={imageSource} alt={`Photo by ${username}`} />

      <div className="photographer-details">
        <div className="photographer-info">
          <img src={profile} alt={`Profile of ${username}`} />
          <p>{username}</p>
        </div>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
}

export default PhotoListItem;
