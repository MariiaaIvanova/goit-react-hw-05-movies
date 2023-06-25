import axios from 'axios';

const API_KEY = 'feafde17f0d0230d9e73e9fe3d719207';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    });
    return response.data.results;
};

export const getSearchMovies = async query => {
    const response = await axios.get(`${BASE_URL}search/movie`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            query: query,
        },
    });
    return response.data.results;
};

export const getDetailsMovies = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    });
    return response.data;
};

export const getReviewsMovies = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    });
  return response.data.results;
};

export const getCreditsMovies = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
       page: 1,
    },
  });

  return response.data.cast;
};