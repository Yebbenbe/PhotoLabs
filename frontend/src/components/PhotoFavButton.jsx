import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isLiked, onClick }) {
  return (
    <div className={`photo-list__fav-icon ${isLiked ? 'is-liked' : ''}`} onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isLiked={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;