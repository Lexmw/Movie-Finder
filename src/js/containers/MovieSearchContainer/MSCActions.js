const axios = require('axios');

export function titleSearch (title) {
  return {
  type: 'MOVIE_TITLE',
  payload: { title }
}
};

export const getMovie = title => ({
  type: 'GET_MOVIE',
  payload: axios.get(`/movieInfo/${title}`)
});

export const getInfo = id => {
  return{
    type: 'GET_DETAILS',
    payload: axios.get(`/movie/${id}`)
  }
  
  
};