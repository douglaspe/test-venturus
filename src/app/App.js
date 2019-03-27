import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion, faTrophy, faPuzzlePiece, faTrash, faHeartbeat, faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import Routes from './routes';
import Header from '../components/template/header/header';

library.add(faQuestion, faTrophy, faPuzzlePiece, faTrash, faHeartbeat, faHome, faChevronRight)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
