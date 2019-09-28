// import { Link } from 'react-router-dom';
import React from 'react';
import {getInfo} from '../MovieSearchContainer/MSCActions'

class MovieDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      const { dispatch} = this.props
      let test = dispatch( getInfo(this.props.match.params.id));
      console.log(test);
  }

  render() {
    const {movieDetails} = this.props;
    return (
      <div className='container'>
          <div className='jumbotron'>
            <h1 id='appTitle' className='display-3 text-center'>Movie Details</h1>
          </div>

          <a href= {`/`} className='btn btn-primary float-left'> Go Back</a>
          <div className='row'>
            <div className='col-lg-4 float-left'>
            <img src={movieDetails.Poster}></img>
            </div>
            
            <div className='col-lg-8'>
            <div className='card border-info mb-3'>
              <div className='card-header text-white bg-info'>Movie Details</div>
                    <div className='card-body'>
                    <h2 className="card-title text-left font-weight-bold">{movieDetails.Title}</h2>
                    <div className='row'>
                    <p className='bg-success col-md mx-1 rounded text-white'>Released {movieDetails.Released}</p>
                    <p className='bg-success col-md mx-1 rounded text-white'>{movieDetails.Runtime}</p>
                    <p className='bg-success col-md mx-1 rounded text-white'>{movieDetails.Genre}</p>

                    </div>
                    <hr></hr>
                    
                    <h5 className='text-left'> { movieDetails.Plot }</h5>
                    <br></br>
                    <h5 className='text-left'>{ movieDetails.Awards }</h5>
                    <br></br>
              
                    <h5 className='text-left'><strong>Metascore:</strong> {movieDetails.Metascore}/100</h5>
                    <h5 className='text-left'> <strong>IMDB:</strong> {movieDetails.imdbRating} </h5>
                      
                  
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default MovieDetailsContainer;