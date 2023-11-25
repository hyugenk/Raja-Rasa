import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  // SEARCH_RESTAURANT: (q) => `${CONFIG.BASE_URL}search?q=query`,
  // REVIEW: `${CONFIG.BASE_URL}review/`,
};

export default API_ENDPOINT;
