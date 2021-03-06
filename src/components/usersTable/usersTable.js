import React, { Component } from 'react';

import './usersTable.scss';

import UsersHeader from '../usersHeader/usersHeader';
import UsersList from '../usersList/usersList';

class UsersTable extends Component {

  render() {

  return (
  <div className="container-fluid">
      <UsersHeader />
      <table className="table table-custom">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">City</th>
            <th scope="col">Ride in group</th>
            <th scope="col">Day of the week</th>
            <th scope="col">Posts</th>
            <th scope="col">Albums</th>
            <th scope="col">Photos</th>
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
