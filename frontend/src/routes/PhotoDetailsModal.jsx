  import React from 'react';
  import PhotoList from '../components/PhotoList';
  import '../styles/PhotoDetailsModal.scss'
  import closeSymbol from '../assets/closeSymbol.svg';
  import PhotoFavButton from '../components/PhotoFavButton';

  const PhotoDetailsModal = ({ selectedPhotoData, closeModal, likedPhotos, toggleFavorite, openModal }) => {
    const { id, urls, user, location, similar_photos } = selectedPhotoData;
    const { username, profile } = user;
    const { city, country } = location;

    const isLiked = likedPhotos.includes(id);

    // console.log("photo data within modal:", selectedPhotoData);  // not working, not proccing

    const handleToggleFavorite = () => {
      toggleFavorite(id);
    };

    return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <PhotoFavButton isLiked={isLiked} onClick={handleToggleFavorite} />
        <img className="photo-details-modal__image" src={urls.full} alt={`Photo by ${username}`} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} alt={`Profile of ${username}`} />
          <div className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__photographer-name">{username}</p>
            <p className="photo-details-modal__photographer-location">{city}, {country}</p>
          </div>
        </div>
        <div className="photo-details-modal__images">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
            <PhotoList
              openModal={openModal} likedPhotos={likedPhotos} toggleFavorite={toggleFavorite} photoData={similar_photos}  />
        </div>
      </div>
    );
  };

  export default PhotoDetailsModal;
