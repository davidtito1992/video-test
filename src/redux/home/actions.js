import * as VideosService from '../../services/VideosService';

export const actionTypes = {
  FETCH_HOME_REQUEST: 'FETCH_HOME_REQUEST',
  FETCH_HOME_SUCCESS: 'FETCH_HOME_SUCCESS',
  FETCH_HOME_ERROR: 'FETCH_HOME_ERROR',
};

function loadHomeRequest() {
  return {
    type: actionTypes.FETCH_HOME_REQUEST,
  };
}

function loadHomeSuccess(results) {
  return {
    type: actionTypes.FETCH_HOME_SUCCESS,
    data: results,
    error: null,
  };
}

function loadHomeError(error) {
  return {
    type: actionTypes.FETCH_HOME_ERROR,
    data: null,
    error: error,
  };
}

export const getHome = (offset = 0, limit = 10) => async dispatch => {
  dispatch(loadHomeRequest());
  try {
    const response = await VideosService.getHome(offset, limit);
    if (response.status === 200) {
      const videos = response?.data;
      dispatch(loadHomeSuccess(videos));
    } else {
      dispatch(loadHomeError(response.error));
    }
  } catch (error) {
    dispatch(loadHomeError('No pudimos obtener la lista de home'));
  }
};
