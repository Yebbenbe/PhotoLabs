import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // modal stuff
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
       <HomeRoute openModal={openModal} closeModal={closeModal} /> {/* modal pass */}
       {showModal && <PhotoDetailsModal closeModal={closeModal} />} {/* modal render */}
    </div>
  );
};

export default App;
