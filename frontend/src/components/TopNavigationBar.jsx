import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ likedPhotos, topicData, selectedTopic  }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} selectedTopic={selectedTopic} />
      <FavBadge isFavPhotoExist={likedPhotos.length > 0} />
    </div>
  );
};

export default TopNavigation;