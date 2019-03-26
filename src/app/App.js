import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion, faTrophy, faPuzzlePiece, faTrash, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import Routes from './routes';
import Header from '../components/template/header/header';
import Breadcrumb from '../components/template/headerBreadcrumb'

library.add(faQuestion, faTrophy, faPuzzlePiece, faTrash, faHeartbeat)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Breadcrumb />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
