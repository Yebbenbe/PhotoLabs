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
    photoData,
    topicData,
    state,
    selectedTopic
  } = useApplicationData();

  // The following logs procc only at the initial render. They do not seem to procc when the modal is supposed to be opening
  //console.log("selectedPhoto in App.jsx:", selectedPhoto); 
  //console.log("showModal state APP: ", showModal);


  return (
    <div className="App">
      <HomeRoute
        openModal={openModal}
        closeModal={closeModal}
        likedPhotos={state.likedPhotos}
        toggleFavorite={toggleFavorite}
        photoData={state.photoData}
        topicData={topicData}
        selectedTopic={selectedTopic} />

      {state.showModal && <PhotoDetailsModal
        selectedPhotoData={state.selectedPhoto}
        closeModal={closeModal}
        likedPhotos={state.likedPhotos}
        toggleFavorite={toggleFavorite}
      /> }
    </div>
  );
};

export default App;
