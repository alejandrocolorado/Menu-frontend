import React, { useState } from 'react';
import './App.css';
//import 'bulma/css/bulma.css';
import CategoryList from './Components/CategoryList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Foodlist from './Components/Foodlist';
import SearchComponent from './Components/SearchComponent';
import foods from './foods.json';
import Helmet from 'react-helmet';

function App() {
  const [buscar, setBuscar] = useState(false);

  return (
    <div className="App">
      <Router>
        <Helmet>
          <style>{`body { background-color: ${foods.backgroundColor}; min-height:100vh; font-family: ${foods.font}; color: ${foods.color}}`}</style>
        </Helmet>
        <Link to="/">
          {' '}
          <img src={foods.iso} alt="logo" className="isoTipo" />
        </Link>
        <input
          type="button"
          onClick={() => setBuscar(!buscar)}
          value={buscar ? 'volver' : 'buscar'}
        />
        {buscar ? (
          <SearchComponent />
        ) : (
          <div>
            <Route path="/" exact component={CategoryList} />
            <Route path="/category/:categoryName" exact component={Foodlist} />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;