import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import './App.scss';

import UsersTable from '../usersTable/usersTable';
import Header from '../header/header';

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UsersTable />
      </div>
    );
  }
}

export default App;
