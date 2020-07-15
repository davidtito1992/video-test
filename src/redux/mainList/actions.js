import * as VideosService from '../../services/VideosService';

export const actionTypes = {
  FETCH_MAIN_LIST_REQUEST: 'FETCH_MAIN_LIST_REQUEST',
  FETCH_MAIN_LIST_SUCCESS: 'FETCH_MAIN_LIST_SUCCESS',
  FETCH_MAIN_LIST_ERROR: 'FETCH_MAIN_LIST_ERROR',
};

function loadMainListRequest() {
  return {
    type: actionTypes.FETCH_MAIN_LIST_REQUEST,
  };
}

function loadMainListSuccess(results) {
  return {
    type: actionTypes.FETCH_MAIN_LIST_SUCCESS,
    data: results,
    error: null,
  };
}

function loadMainListError(error) {
  return {
    type: actionTypes.FETCH_MAIN_LIST_ERROR,
    data: null,
    error: error,
  };
}

export const getMainList = id => async dispatch => {
  dispatch(loadMainListRequest());
  try {
    const response = await VideosService.getMainList(id);
    if (response.status === 200) {
      dispatch(loadMainListSuccess(response?.data));
    } else {
      dispatch(loadMainListError(response.error));
    }
  } catch (error) {
    dispatch(loadMainListError('No pudimos obtener la lista Principal'));
  }
};
