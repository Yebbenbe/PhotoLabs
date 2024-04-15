import { useReducer } from 'react';

// define action types
export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
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

  // return state and actions
  return {
    likedPhotos: state.likedPhotos,
    toggleFavorite,
    showModal: state.showModal,
    selectedPhoto: state.selectedPhoto,
    openModal,
    closeModal,
  };
};

export default useApplicationData;