import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    likedPhotos,
    toggleFavorite,
    showModal,
    selectedPhoto,
    openModal,
    closeModal,
    photoData
  } = useApplicationData();



  return (
    <div className="App">
      <HomeRoute
        openModal={openModal}
        closeModal={closeModal}
        likedPhotos={likedPhotos}
        toggleFavorite={toggleFavorite} 
        photoData={photoData}/>

      {showModal && <PhotoDetailsModal
          selectedPhotoData={selectedPhoto}
          closeModal={closeModal}
          likedPhotos={likedPhotos}
          toggleFavorite={toggleFavorite}
      />}
    </div>
  );
};

export default App;
