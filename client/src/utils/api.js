import axios from 'axios';

const apiUrlPrefix = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiUrlPrefix,
});

export const getRequest = async (url) => {
  const response = await api.get(url);
  return response;
};

export const postRequest = async (url, body) => {
  const response = await api.post(url, body);
  return response;
};

export const deleteRequest = async (url) => {
  const response = await api.delete(url);
  return response;
};

export const putRequest = async (url, body) => {
  const response = await api.put(url, body);
  return response;
};
