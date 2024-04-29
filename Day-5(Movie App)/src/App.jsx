import React from "react";
import Navbar from "./Navbar.jsx";
import MovieList from "./MovieList.jsx";
import { movies } from "./movieData.jsx";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      movieCount: 0,
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);

    if (movies[mId].star >= 5) {
      return;
    }
    movies[mId].star += 0.5;
    
    this.setState({
      movies: movies,
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);

    if (movies[mId].star <= 0) {
      return;
    }

    movies[mId].star -= 0.5;

    this.setState({
      movies: movies,
    });
  };
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mID = movies.indexOf(movie);

    movies[mID].favorite = !movies[mID].favorite;

    this.setState({
      movies,
    });
  };
  handleToggleCard = (movie) => {
    const { movies} = this.state;
    let { movieCount } = this.state;

    const mID = movies.indexOf(movie);
    movies[mID].isInCard = !movies[mID].isInCard;

    if(movies[mID].isInCard){
      movieCount += 1;
    }
    else{
      movieCount -= 1;
    }
    console.log(movieCount);

    this.setState({
      movies,
      movieCount
    });
  };


  render() {
    const { movies } = this.state;
    return (
      <>
        <Navbar movieCount = {this.state.movieCount}/>
        <MovieList
            movies={movies}
            addStar={this.handleIncStar}
            decStar={this.handleDecStar}
            toggleFav={this.handleToggleFav}
            toggleCard={this.handleToggleCard}
        />
      </>
    );
  }
}
