import React from 'react';
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component{

    render(){    
        const {movies} = this.props;
        const {addStar, decStar, toggleFav, toggleCard} = this.props;
        return (
            <>
                {
                    movies.map((movie, index)=> < MovieCard movieProps = {movie} 

                            addStar={addStar} 
                            decStar={decStar}
                            toggleFav={toggleFav}
                            toggleCard={toggleCard}

                    key={index}/>)
                }
            </>
        )
    }
}