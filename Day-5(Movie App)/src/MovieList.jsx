import React from 'react';
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component{
    constructor(){
        super();
        this.state = {
            movies : [
                {
                    title : "Iron Man",
                    plot : 'Supernatural power shown in the movie.',
                    price : 199,
                    rating : 8.9,
                    star : 0,
                    favorite : true,
                    isInCard : false
                },
                {
                    title : "Dark Knight",
                    plot : 'Supernatural power shown in the movie.',
                    price : 299,
                    rating : 7.9,
                    star : 2,
                    favorite : true,
                    isInCard : false
                },
                {
                    title : "Super Man",
                    plot : 'Supernatural power shown in the movie.',
                    price : 599,
                    rating : 8.2,
                    star : 2,
                    favorite : true,
                    isInCard : false
                },

            ]
        }
    }

    handleIncStar = (movie)=>{
        const {movies} = this.state;
        const mId = movies.indexOf(movie);
        
        movies[mId].star += 0.5;

        this.setState({
            movies: movies
        })

    }

    render(){    
        const {movies} = this.state;
        return (
            <>
                {
                    movies.map((movie, index)=> < MovieCard movieProps = {movie} addStar = {this.handleIncStar} key={index}/>)
                }
            </>
        )
    }
}