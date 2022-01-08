import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_SERVER_REQUEST, API_KEY, API_MOVIE_REQUEST } from "../Constants";
const initialState = {
    movies: [],
    page: 1,
    selectedMovieDetail: {},
    favourites:[],
    isFavorite:false
}
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (pageNumber) => {
    //console.log(getPageNumber());
    const response = await fetch(`${API_SERVER_REQUEST}${API_KEY}&language=en-US&page=${pageNumber}`);
    const movies = await response.json();
    return movies;
    //dispatch(addMovies(movies));
});

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (movieId) => {
    //console.log(getPageNumber());
    const response = await fetch(`${API_MOVIE_REQUEST}movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    const movieData = await response.json();
    return movieData;
    //dispatch(addMovies(movies));
});

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovie:(state)=>{
            state.selectedMovieDetail={}
        },
        removeMovies:(state)=>{
            state.movies=[];
            state.page=1;
        },
        addToFavourites:(state)=>{
            state.favourites.push(state.selectedMovieDetail);
        },
        removeFromFavourites:(state,{payload})=>{
            state.favourites=state.favourites.filter((element)=>element.id!=payload);
        },
        isFavourite:(state,{payload})=>{
            state.isFavorite=state.favourites.filter((element)=>element.id==payload).length>0
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched");
            console.log([...state.movies].concat(payload.results));
            let movies = [...state.movies].concat(payload.results);
            return { ...state, movies: movies, page: payload.page + 1 }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncMovieDetail.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched");
            return { ...state, selectedMovieDetail: payload }
        },
        [fetchAsyncMovieDetail.rejected]: () => {
            console.log("Rejected");
        }
    }
});

export const { removeSelectedMovie,removeMovies,addToFavourites,removeFromFavourites,isFavourite } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getPageNumber = (state) => state.movies.page;
export const getMovieDetail = (state) => state.movies.selectedMovieDetail;
export const getFavourites=(state)=>state.movies.favourites;
export const getIsFavourite=(state)=>state.movies.isFavorite;
export default movieSlice.reducer;