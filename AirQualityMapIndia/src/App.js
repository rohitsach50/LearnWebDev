import React from 'react';
import Navigation from './components/Navigation';
import Map from './components/Map';

const App = () => {
  return(   
      <div className='main-body'>  
          <Navigation/>
          <Map/>
      </div>
  ) 
};

export default App;
