import React, { Component } from 'react';

import './usersTable.scss';
import UsersList from '../usersList/usersList';

class UsersTable extends Component {

  render() {

  return (
  <div className="container">
      <table className="table table-custom">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">City</th>
          </tr>
              </thead>
                <tbody>
                  <UsersList />
                </tbody>
            </table>
        </div>
    );
  }
}

export default UsersTable;
