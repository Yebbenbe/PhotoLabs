import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleFavClick = useCallback(() => {
    setIsLiked(prevState => !prevState);
  }, []);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavClick}>
        <FavIcon isLiked={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;