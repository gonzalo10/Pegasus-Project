import React, { Component } from 'react';
import './App.css';
import Autocomplete from './Autocomplete';
const App = () => {
  return (
    <div className="App">
      <Autocomplete
        options={[
          'Valladolid',
          'Mayorca',
          'Barcelona',
          'Tenerife',
          'Madrid'
        ]}
      />
    </div>
  );
};
export default App;