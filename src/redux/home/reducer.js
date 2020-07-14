import { actionTypes } from './actions';

const initialState = {
  videos: [],
  mainLists: [],
};

function videos(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_HOME_SUCCESS:
      return state.mainLists?.lenght === 0
        ? {
            ...state,
            mainLists: action?.data?.listasPrincipales,
            videos: state.videos.concat(action?.data?.items),
          }
        : {
            ...state,
            videos: state.videos.concat(action?.data?.items),
          };
    case actionTypes.FETCH_HOME_ERROR:
      return { ...state };
    default:
      return state;
  }
}

export default videos;
