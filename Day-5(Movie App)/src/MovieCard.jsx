import React from 'react';

export default class MovieCard extends React.Component{

    render(){
        return (
            <>
                <div className='main'>
                    <div className="movie_card">
                        <div className="left_section">
                            <img src="https://i.pinimg.com/564x/f6/0b/b6/f60bb6c7f99875177e94656bb3926d7d.jpg" alt="ironman" />
                        </div>
                        <div className="right_section">
                            <span className='movie_title dark'>Iron Man</span>
                            <p className='dark'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                            <span className='dark bold'>Rs: 300</span>
                            <div className="movie_foot">
                                <span className='dark'>Rating: 8.0</span>
                                <span className='dark'>star .0 </span>
                                <div className="movie_btn">
                                    <button className='fav_btn btn'>Favorite</button>
                                    <button className='buy_btn btn'>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}