import api from '../config/api';

export const getHome = async (offset = 0, limit = 10) =>
  api.get('/home', { offset, limit });

export const getMainList = async (id, offset = 0, limit = 10) =>
  api.get('/home', { offset, limit });
