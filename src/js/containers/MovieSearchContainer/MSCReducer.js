const defaultState = {
    title: '',
    movies: [],
    movieInfo: []
  };
  
  export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'MOVIE_TITLE': {
        return {
          ...state,
          title: payload.title
        };
      }
  
      case 'GET_MOVIE_FULFILLED': {
        return {
          ...state,
          searchInput: payload.data.Search.Title,
          movies: payload.data.Search
        };
      }
  
      case 'GET_DETAILS_FULFILLED': {
        return {
          ...state,
          movieInfo: payload.data
        };
      }
  
      default:
        return state;
    }
  }