import React from 'react';

export default class MovieCard extends React.Component{

    
    render(){
        // Extracting state object
        const {title,plot,price,rating, star, favorite, isInCard} = this.props.movieProps;
        console.log(this.props);

        return (
            <>
                <div className='main'>
                    <div className="movie_card">
                        <div className="left_section">
                            <img src="https://i.pinimg.com/564x/f6/0b/b6/f60bb6c7f99875177e94656bb3926d7d.jpg" alt="ironman" />
                        </div>
                        <div className="right_section">
                            <span className='movie_title dark'>{title}</span>
                            <p className='dark'>{plot}</p>
                            <span className='dark bold'>Rs: {price}</span>
                            <div className="movie_foot">
                                <span className='dark'>Rating: {rating}</span>
                                <div className='dark'>
                                    <img className='star_btn' src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" alt="decrease" onClick={this.decreaseStar}/>

                                    <img alt='star' className='stars' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' />

                                    <img className='star_btn' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" onClick={()=> this.props.addStar(this.props.movieProps)} />

                                    <span>{star}</span>

                                </div>
                                <div className="movie_btn">

                                    <button className={favorite ? "fav_btn btn" : 'unfav_btn btn'} onClick={this.handleFavBtn}>
                                        {favorite ? 'Favorite' : 'Unfavorite'}
                                    </button>
                                    
                                    <button className={isInCard ? 'unfav_btn btn' : 'buy_btn btn'} onClick={this.handleItem}>
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