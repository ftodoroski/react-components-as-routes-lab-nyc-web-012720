import React from 'react'

const Actor = props => 
    <div>
        <h3>{props.actor.name}</h3>
        <ul>
        {props.actor.movies.map((movie, index) => <li key={index} className='actor' >{movie}</li>)}
        </ul>
    </div>


export default Actor