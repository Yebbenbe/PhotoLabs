// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevLikedPhotos, photoId];
      }
    });
  };

  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return {
    likedPhotos,
    toggleFavorite,
    showModal,
    selectedPhoto,
    openModal,
    closeModal,
  };
};

export default useApplicationData;