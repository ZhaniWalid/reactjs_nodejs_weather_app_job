import React from 'react';
import LightningBolt from '../assets/lightning.svg';

const Home = () => {
  return (
    <div>
      <div className='header'>
        <h2>Weather Forecast</h2>
        <img src={LightningBolt} alt="" />
      </div>
      <div className="instructions">
        {/* <p>Enter a <strong>City Name</strong> or a <strong>Country Name</strong> below to get the current weather conditions for that area.</p> */}
        <p>Entrez un <strong> Nom de Ville </strong> ou un <strong> Nom de Pays </strong> ci-dessous pour obtenir les conditions météorologiques actuelles de cette région. </p>
      </div>
      <div className='zipcodeInput'>
      {/* The input form posts it’s value to a POST route in the backend.
          This backend POST route then assigns the received input value to a variable... 
          ...so we can use it later when calling the weather API. */}
        <form method='POST' action='/search-location'>
          <input type='text' 
                 //placeholder='Enter a city name or a country name..'
                 placeholder='Entrez un Nom de Ville ou un Nom de Pays ...' 
                 name='zipcode'/>
          <button>ENTER</button>
        </form>
      </div>
    </div>
  );
};

export default Home;