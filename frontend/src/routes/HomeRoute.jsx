  import React, { useState } from 'react';
  import TopNavigationBar from '../components/TopNavigationBar';
  import PhotoList from '../components/PhotoList';
  import '../styles/HomeRoute.scss';
  import PhotoDetailsModal from '../routes/PhotoDetailsModal';
  import useApplicationData from '../hooks/useApplicationData';

  const HomeRoute = ({likedPhotos, toggleFavorite, openModal, photoData, topicData, selectedTopic}) => {

/*
    const handleTopicClick = (topicId) => {
      setSelectedTopic(topicId);
      fetchPhotosByTopic(topicId);
    }; */

    return (
      <div className="home-route">
        <TopNavigationBar likedPhotos={likedPhotos} topicData={topicData} selectedTopic={selectedTopic} />
        <PhotoList openModal={openModal} likedPhotos={likedPhotos} toggleFavorite={toggleFavorite} photoData={photoData} />
      </div>
    );
  };

  export default HomeRoute;