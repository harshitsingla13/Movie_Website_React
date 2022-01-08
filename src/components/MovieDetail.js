import React,{useEffect} from 'react'
import {IMAGE_URL} from '.././Constants';
import Banner from './Banner';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourites,fetchAsyncMovieDetail, getMovieDetail, removeSelectedMovie,addToFavourites,getFavourites,isFavourite,getIsFavourite } from '../redux/movieSlice';
import '../styles/MovieDetail.css'
// import { connect } from 'react-redux';

function MovieDetail() {
    const {movieId}=useParams();
    const favouritesArray=useSelector(getFavourites);
    const dispatch=useDispatch();
    dispatch(isFavourite(movieId));
    let isAddedToFavourite=useSelector(getIsFavourite);
    console.log(isAddedToFavourite);
    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(movieId));
        return()=>{
            dispatch(removeSelectedMovie());
        }
    }, [movieId,favouritesArray])
    const movie=useSelector(getMovieDetail);
    const handleClick=event=>{
        if(event.target.innerHTML==="Remove From Favourites"){
            dispatch(removeFromFavourites(movieId));
        }
        else if(event.target.innerHTML==="Add To Favourite"){
            dispatch(addToFavourites());
        }
    }
    return (
        <div>
            {/* Banner */}
            {movie &&
                <Banner image={`${IMAGE_URL}w1280${movie.backdrop_path && movie.backdrop_path}`}
                    title={movie.original_title} text={movie.overview} />
            }

            {/* Body */}

            <div className='movieDetail_container'>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleClick}>{isAddedToFavourite?"Remove From Favourites":"Add To Favourite"}</button>
                </div>

                {/* Movie Info Table */}
                <h2>Movie Info</h2>
                <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>release_date</th>
                        <th>revenue</th>
                        <th>runtime</th>
                        <th>vote_average</th>
                        <th>vote_count</th>
                        <th>status</th>
                        <th>popularity</th>
                    </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td>{movie.original_title}</td>
                        <td>{movie.release_date}</td>
                        <td>{movie.revenue}</td>
                        <td>{movie.runtime}</td>
                        <td>{movie.vote_average}</td>
                        <td>{movie.vote_count}</td>
                        <td>{movie.status}</td>
                        <td>{movie.popularity}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//       movieId: ownProps.match.params.movieId
//     }
//   }
  
  //export default connect(mapStateToProps)(MovieDetail);

export default MovieDetail
