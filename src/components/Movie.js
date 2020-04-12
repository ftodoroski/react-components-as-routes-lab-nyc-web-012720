import React from 'react'

const Movie = props =>
    <div>
        <h3>Name: {props.movie.title}</h3>
        <p>Time: {props.movie.time}</p>
        <ul>Genre: 
            {props.movie.genres.map((genre, index) => <li key={index} >{genre}</li>)}
        </ul>
        <p>Metascore: {props.movie.metascore ? props.movie.metascore : 0} </p>
    </div>


export default Movie