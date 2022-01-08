import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/GridCard.css'

function GridCard(props) {
    if (props.actor) {
        return (
        <img className="gridCard__image" alt="img" src={props.image} />
        )
    } else {
        return (
            <Link to = {{pathname:`/movie/${props.movieId}`}}>
{/* <a className="grid__container" href={`/movie/${props.movieId}`}> */}
            <img className="gridCard__image" alt="img" src={props.image}/>
        {/* </a> */}
</Link>
        )
    }
}

export default GridCard
