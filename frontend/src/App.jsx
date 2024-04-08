import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';

import './App.scss';
/*
const sampleDataForPhotoListItem = new Array(3).fill({
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
});
*/
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/*{sampleDataForPhotoListItem.map((data, index) => (
        <PhotoListItem key={index} data={data} /> 
      ))} */}
           <PhotoList/>
    </div>
  );
};

export default App;
