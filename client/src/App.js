import React from 'react';
import './styleComponents/style.css';
import { Route } from 'react-router-dom';
import CreatorPage from './components/creatorPage';
import DetailsPage from './components/detailsPage';
import InicialPage from './components/inicialPage';
import MainPage from './components/mainPage';
import Navbar from './components/navbar';
import Game from './components/game/Game.jsx';

function App() {
  return (
      <React.Fragment>
        <Route exact path={'/'} component={InicialPage}/>
        <Route path={'/countries'} component={Navbar}/>
        <Route exact path={'/countries'} component={MainPage}/>
        <Route exact path={'/countries/details'} component={DetailsPage}/>
        <Route exact path={'/countries/creator'} component={CreatorPage}/>
        <Route exact path={'/countries/game'} component={Game}/>
      </React.Fragment>
  );
}

export default App;
