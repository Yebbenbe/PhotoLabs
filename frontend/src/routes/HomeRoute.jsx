  import React, { useState } from 'react';
  import TopNavigationBar from '../components/TopNavigationBar';
  import PhotoList from '../components/PhotoList';
  import '../styles/HomeRoute.scss';
  import PhotoDetailsModal from '../routes/PhotoDetailsModal';

  const HomeRoute = ({openModal}) => {
    const [likedPhotos, setLikedPhotos] = useState([]);  

    const toggleFavorite = (photoId) => {
      const isLiked = likedPhotos.includes(photoId);
      if (isLiked) {
        setLikedPhotos(likedPhotos.filter(id => id !== photoId));
      } else {
        setLikedPhotos([...likedPhotos, photoId]);
      }
    };

    return (
      <div className="home-route">
        <TopNavigationBar likedPhotos={likedPhotos} />
        <PhotoList openModal={openModal} likedPhotos={likedPhotos} toggleFavorite={toggleFavorite} />
      </div>
    );
  };

  export default HomeRoute;