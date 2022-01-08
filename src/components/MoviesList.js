import React,{useEffect} from 'react';
import {IMAGE_URL} from '.././Constants';
import Banner from './Banner';
import GridCard from './GridCard';
import '../styles/MoviesList.css';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAsyncMovies, getAllMovies, getPageNumber,getFavourites } from '../redux/movieSlice';

const MoviesList=React.memo(_=> {
    const dispatch=useDispatch();
    const movies=useSelector(getAllMovies);
    const currentPage=useSelector(getPageNumber);
    const favouriteMovies=useSelector(getFavourites);
    const [toFetch,setToFetch]=React.useState(false);
    useEffect(()=>{
        fetchMovies();
    },[]);
    const fetchMovies = () => {
        dispatch(fetchAsyncMovies(currentPage));
    }
    const handleClick = () => { 
        fetchMovies();
    }
    return (
        <div className='container'>
            {/* Movie Main Image  */}
            {movies.length>0 && movies[0] &&
                <Banner image={`${IMAGE_URL}w1280${movies[0].backdrop_path && movies[0].backdrop_path}`}
                    title={movies[0].original_title} text={movies[0].overview} />
            }

            {/* Body  */}
            <div className='movieListBodyContainer'>
                <h2 className='movieListHeading'> Movies by latest</h2>
                <hr />

                <div className='moviesCard'>
                    {movies && movies.map((movie,index) => (
                        <React.Fragment key={index}>
                            <GridCard 
                                image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                                movieId={movie.id}
                            />
                        </React.Fragment>
                    ))}
                    <div className='loadMoreButton'>
                        <button className="loadButton" onClick={handleClick}> Load More </button>
                    </div>
                </div>

            </div>

            {favouriteMovies.length>0 && <div className='movieListBodyContainer'>
                <h2 className='movieListHeading'> Favourite Movies</h2>
                <hr />

                <div className='moviesCard'>
                    {favouriteMovies && favouriteMovies.map((movie,index) => (
                        <React.Fragment key={index}>
                            <GridCard 
                                image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                                movieId={movie.id}
                            />
                        </React.Fragment>
                    ))}
                </div>

            </div>}

        </div>
    )
})
export default MoviesList;
