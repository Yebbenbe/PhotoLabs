import { useReducer, useEffect } from 'react';


// define action types
export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      const { photoId } = action.payload;
      if (state.likedPhotos.includes(photoId)) {
        return { ...state, likedPhotos: state.likedPhotos.filter((id) => id !== photoId) };
      } else {
        return { ...state, likedPhotos: [...state.likedPhotos, photoId] };
      }
    case ACTIONS.OPEN_MODAL:
      console.log("Payload for OpenModal case:", action.payload);
      return { ...state, selectedPhoto: action.payload, showModal: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
      }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  // initialize state with initial values
  const initialState = {
    likedPhotos: [],
    showModal: false,
    selectedPhoto: null,
    photoData: [],
    topicData: []
  };

  // function to fetch photos by topic
  const selectedTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch((error) => { console.error('Error:', error) });
  };
  // use reducer with initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // action creators
  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { photoId } });
  };

  const openModal = (selectedPhoto) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: selectedPhoto });
    // console.log("selectedPhoto in openModal defintion:", selectedPhoto); working
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  /* Log state changes after dispatch, should tell us modal state
  useEffect(() => {
    console.log("showModal AFTER opening modal:", state.showModal); //working
    console.log("state: ", state); //working
  }, [state.showModal]); */

  // effect for grabbing photo data
  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        // dispatch action
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photo data:', error);
      });
    // fetching topics
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topic data:', error);
      });
    // empty array so no loop
  }, []);


  // return state and actions
  return {
    likedPhotos: state.likedPhotos,
    toggleFavorite,
    showModal: state.showModal,
    selectedPhoto: state.selectedPhoto,
    openModal,
    closeModal,
    photoData: state.photoData,
    topicData: state.topicData,
    state,
    selectedTopic
  };
};

export default useApplicationData;