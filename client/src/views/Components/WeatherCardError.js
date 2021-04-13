import React from 'react';
import { Link } from 'react-router-dom';

import NoLocationFound from '../assets/no-location.svg';

export default function WeatherCardError(props) {
  return (
    <div className='weatherCardContainer'>
      <div className='weatherCardError'>
        <img src={NoLocationFound} alt='no location found'/>
        {/* <p> Whoa! Looks like there was an error with your <strong>City Name</strong> or <strong>Country Name</strong> .</p> */}
        <p> Whoa! Il semble qu'une erreur se soit produite avec votre <strong> Nom de Ville </strong> ou votre <strong> Nom de Pays </strong>. </p>
        <Link to='/'>
          {/* <button>Try Again</button> */}
          <button>Réessayer</button>
        </Link>
      </div>
    </div>
  );
}