import Reactotron from 'reactotron-react-native';
import { create } from 'apisauce';
import Config from 'react-native-config';

const baseURL = Config.BASE_URL;

const api = create({
  baseURL,
  timeout: 5000,
});

export { baseURL };

api.addMonitor(Reactotron.apisauce);

export const apiSetup = dispatch => {
  // eslint-disable-line no-unused-vars, prettier/prettier
  if (baseURL === '') {
    console.warn('API baseURL has not been properly initialized');
  }

  api.addMonitor(response => {
    if (response.status === 401) {
      // dispatch(actions.sessionExpired());
      console.warn('Unhandled session expiration');
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // dispatch(actions.noInternetConnection());
      console.warn('Unhandled request without connection');
    }
  });
};

export default api;
