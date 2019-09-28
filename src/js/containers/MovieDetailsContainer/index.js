import { connect } from 'react-redux';
import MovieDetailsContainer from './MovieDetailsContainer';

const mapStoreToProps = store => ({
  title: store.movieData.title,
  movieDetails: store.movieData.movieInfo
});

export default connect(mapStoreToProps)(MovieDetailsContainer);