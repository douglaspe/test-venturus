import React from 'react';

import UserSearch from '../userSearch/userSearch'

const UsersTable = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h1>Title</h1>
        </div>
        <div className="col-6">
          <UserSearch />
        </div>
      </div>
    </div>
  )
}

export default UsersTable;
