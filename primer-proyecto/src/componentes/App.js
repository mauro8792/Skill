import React from 'react';
import Header from './Header';
import TemporaryDrawer from './TemporaryDrawer';
import Cards from './Cards';
//import  'bootstrap / dist / css / bootstrap.min.css';

function App() {
  return (
    <div >
      <Header
        titulo = "Lenguajes de Programación"
      />
      <div >
          <TemporaryDrawer/>
          <Cards/>
      </div>

    </div>
  );
}

export default App;
