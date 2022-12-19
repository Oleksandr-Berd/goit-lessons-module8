import axios from 'axios';

const BASE_URL = 'http://hn.algolia.com/api/v1';

export const fetchArticles = (query, page = 1) => {
  return axios.get(`${BASE_URL}/search?query=${query}&page=${page}`);
};

export const fetchArticlesById = id => {
  return axios.get(`${BASE_URL}/items/${id}`);
};
