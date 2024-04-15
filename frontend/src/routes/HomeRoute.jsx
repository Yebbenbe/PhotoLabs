  import React, { useState } from 'react';
  import TopNavigationBar from '../components/TopNavigationBar';
  import PhotoList from '../components/PhotoList';
  import '../styles/HomeRoute.scss';
  import PhotoDetailsModal from '../routes/PhotoDetailsModal';
  import useApplicationData from '../hooks/useApplicationData';

  const HomeRoute = () => {
    const { likedPhotos, toggleFavorite, openModal, photoData } = useApplicationData();

    return (
      <div className="home-route">
        <TopNavigationBar likedPhotos={likedPhotos} />
        <PhotoList openModal={openModal} likedPhotos={likedPhotos} toggleFavorite={toggleFavorite} photoData={photoData} />
      </div>
    );
  };

  export default HomeRoute;