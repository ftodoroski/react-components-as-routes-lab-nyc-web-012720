import React from 'react'

const Director = props =>
    <div>
        <h3>{props.director.name}</h3>
        <ul>
            {props.director.movies.map((movie, index) => <li key={index} className='director' >{movie}</li>)}
        </ul>
    </div>


export default Director