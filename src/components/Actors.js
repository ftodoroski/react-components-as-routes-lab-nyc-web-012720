import React from 'react';
import { actors } from '../data';
import Actor from './Actor';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => <div key={index}><Actor actor={actor}/></div>)}
    </div>
  );
};

export default Actors;
