import { useReducer, useEffect } from 'react';


// define action types
export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA'
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
      return { ...state, selectedPhoto: action.payload, showModal: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false };
      case ACTIONS.SET_PHOTO_DATA: // case for setting photo data
      return { ...state, photoData: action.payload };
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

  // use reducer with initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // action creators
  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { photoId } });
  };

  const openModal = (photoData) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoData });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

   // effect for grabbing photo data
   useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        // dispatch action
        console.log('Photo data:', data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photo data:', error);
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
    topicData: state.topicData
  };
};

export default useApplicationData;