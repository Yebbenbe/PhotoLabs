import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photoData, closeModal, likedPhotos, toggleFavorite, openModal }) => {
  const { urls, user, location } = photoData;
  const { username, profile } = user;
  const { city, country } = location;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

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
        <div className="photo-details-modal__images">
          <PhotoList
            likedPhotos={likedPhotos}
            toggleFavorite={toggleFavorite}
            openModal={openModal} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
