import './App.css';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import MoviesList from './components/MoviesList'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import NavBar from './components/NavBar'
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      
      <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
    <NavBar />
    <Routes >
    
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes >
      
    </div>
    </Router>
    </Suspense>
  );
}

export default App;
