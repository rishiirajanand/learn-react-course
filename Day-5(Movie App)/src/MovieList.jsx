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
                    isInCard : false,
                    imgURL : 'https://i.pinimg.com/564x/f6/0b/b6/f60bb6c7f99875177e94656bb3926d7d.jpg'
                },
                {
                    title : "Dark Knight",
                    plot : 'Supernatural power shown in the movie.',
                    price : 299,
                    rating : 7.9,
                    star : 0,
                    favorite : true,
                    isInCard : false,
                    imgURL : 'https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg'
                },
                {
                    title : "Super Man",
                    plot : 'Supernatural power shown in the movie.',
                    price : 599,
                    rating : 8.2,
                    star : 0,
                    favorite : true,
                    isInCard : false,
                    imgURL : 'https://rukminim2.flixcart.com/image/850/1000/ja9yg7k0/poster/5/z/s/small-justice-league-superman-ab1247-original-imaezw4cng7ttxm3.jpeg?q=20&crop=false'
                },

            ]
        }
    }

    handleIncStar = (movie)=>{
        const {movies} = this.state;
        const mId = movies.indexOf(movie);
        
        if(movies[mId].star >= 5){
            return;
        }
        movies[mId].star += 0.5;
        this.setState({
            movies: movies
        })

    }
    handleDecStar = (movie)=>{
        const {movies} = this.state;
        const mId = movies.indexOf(movie);

        if(movies[mId].star <= 0){
            return;
        }

        movies[mId].star -= 0.5;

        this.setState({
            movies : movies
        })

    }
    handleToggleFav = (movie)=>{
        const {movies} = this.state;
        const mID = movies.indexOf(movie);

        movies[mID].favorite = !movies[mID].favorite
        
        this.setState({
            movies
        })
    }
    handleToggleCard = (movie)=>{
        const {movies} = this.state;

        const mID = movies.indexOf(movie);
        movies[mID].isInCard = !movies[mID].isInCard;
        this.setState({
            movies
        })
    }

    render(){    
        const {movies} = this.state;
        return (
            <>
                {
                    movies.map((movie, index)=> < MovieCard movieProps = {movie} 

                            addStar={this.handleIncStar} 
                            decStar={this.handleDecStar}
                            toggleFav={this.handleToggleFav}
                            toggleCard={this.handleToggleCard} 

                    key={index}/>)
                }
            </>
        )
    }
}