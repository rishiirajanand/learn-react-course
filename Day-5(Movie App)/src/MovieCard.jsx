import React from 'react';

export default class MovieCard extends React.Component{

    
    render(){
        // Extracting handle events from movieList
        const {movieProps, addStar, decStar, toggleFav, toggleCard} = this.props;
        // Extracting state object
        const {title,plot,price,rating, star, favorite, isInCard, imgURL} = movieProps;
        console.log(imgURL);
        return (
            <>
                <div className='main'>
                    <div className="movie_card">
                        <div className="left_section">
                            <img src={imgURL} alt="poster" />
                        </div>
                        <div className="right_section">
                            <span className='movie_title dark'>{title}</span>
                            <p className='dark'>{plot}</p>
                            <span className='dark bold'>Rs: {price}</span>
                            <div className="movie_foot">
                                <span className='dark'>Rating: {rating}</span>
                                <div className='dark'>
                                    <img 
                                        className='star_btn' 
                                        src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" alt="decrease" 
                                        onClick={()=>decStar(movieProps)}
                                    />

                                    <img alt='star' className='stars' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' />

                                    <img className='star_btn' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" onClick={()=> addStar(movieProps)} />

                                    <span>{star}</span>

                                </div>
                                <div className="movie_btn">

                                    <button className={favorite ? "fav_btn btn" : 'unfav_btn btn'} onClick={()=>{toggleFav(movieProps)}}>
                                        {favorite ? 'Favorite' : 'Unfavorite'}
                                    </button>
                                    
                                    <button className={isInCard ? 'unfav_btn btn' : 'buy_btn btn'} onClick={()=>{toggleCard(movieProps)}}>
                                        {isInCard ? 'Remove from card' : 'Add to Card'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}