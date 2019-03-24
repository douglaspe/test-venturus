import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome'
import React, { Component } from 'react';
import './App.scss';

import UsersTable from '../usersTable/usersTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersTable />
      </div>
    );
  }
}

export default App;
