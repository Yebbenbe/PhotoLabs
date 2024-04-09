import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // liked state stuff
  const [likedPhotos, setLikedPhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    const isLiked = likedPhotos.includes(photoId);
    if (isLiked) {
      setLikedPhotos(likedPhotos.filter(id => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };
  // modal stuff
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // function to open modal and set selectedPhoto
  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <HomeRoute
        openModal={openModal}
        closeModal={closeModal}
        likedPhotos={likedPhotos}
        toggleFavorite={toggleFavorite} />

      {showModal && <PhotoDetailsModal  // if showModal is true, render PhotoDetailsModal with photoData at selected photo and the closer function
          photoData={selectedPhoto}
          closeModal={closeModal}
          likedPhotos={likedPhotos}
          toggleFavorite={toggleFavorite}
      />}
    </div>
  );
};

export default App;
