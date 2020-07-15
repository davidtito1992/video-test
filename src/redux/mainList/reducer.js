import { actionTypes } from './actions';

const initialState = {
  videos: [],
};

function mainList(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MAIN_LIST_SUCCESS:
      return {
        ...state,
        videos: action?.data?.items,
      };
    case actionTypes.FETCH_MAIN_LIST_ERROR:
      return { ...state };
    default:
      return state;
  }
}

export default mainList;
