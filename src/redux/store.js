import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movieSlice';

export const store=configureStore({
    reducer:{
        movies:moviesReducer,
        devTools: process.env.NODE_ENV !== 'production',
    },
});