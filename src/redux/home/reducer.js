import { actionTypes } from './actions';

const initialState = {
  videos: [],
  mainLists: [],
  moreItems: true,
};

function videos(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_HOME_SUCCESS:
      return {
        ...state,
        moreItems: action?.data?.moreItems,
        mainLists:
          state.mainLists?.length === 0
            ? state.mainLists.concat(action?.data?.listasPrincipales)
            : [...state.mainLists],
        videos: state.videos.concat(action?.data?.items),
      };
    case actionTypes.FETCH_HOME_ERROR:
      return { ...state };
    default:
      return state;
  }
}

export default videos;
