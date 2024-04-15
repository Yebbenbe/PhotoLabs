  import React, { useState } from 'react';
  import TopNavigationBar from '../components/TopNavigationBar';
  import PhotoList from '../components/PhotoList';
  import '../styles/HomeRoute.scss';
  import PhotoDetailsModal from '../routes/PhotoDetailsModal';
  import useApplicationData from '../hooks/useApplicationData';

  const HomeRoute = ({likedPhotos, toggleFavorite, openModal, photoData, topicData}) => {
    // const { likedPhotos, toggleFavorite, openModal, photoData, topicData } = useApplicationData();

    return (
      <div className="home-route">
        <TopNavigationBar likedPhotos={likedPhotos} topicData={topicData} />
        <PhotoList openModal={openModal} likedPhotos={likedPhotos} toggleFavorite={toggleFavorite} photoData={photoData} />
      </div>
    );
  };

  export default HomeRoute;