  import React, { useState } from 'react';
  import TopNavigationBar from '../components/TopNavigationBar';
  import PhotoList from '../components/PhotoList';
  import '../styles/HomeRoute.scss';
  import PhotoDetailsModal from '../routes/PhotoDetailsModal';

  const HomeRoute = ({ openModal, likedPhotos, toggleFavorite }) => {


    return (
      <div className="home-route">
        <TopNavigationBar likedPhotos={likedPhotos} />
        <PhotoList openModal={openModal} likedPhotos={likedPhotos} toggleFavorite={toggleFavorite} />
      </div>
    );
  };

  export default HomeRoute;