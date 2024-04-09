import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
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
       <HomeRoute openModal={openModal} closeModal={closeModal} /> {/* modal functions pass */}
       {showModal && <PhotoDetailsModal  // if showModal is true, render PhotoDetailsModal with photoData at selected photo and the closer function
          photoData={selectedPhoto}
          closeModal={closeModal}
        /> }
    </div>
  );
};

export default App;
