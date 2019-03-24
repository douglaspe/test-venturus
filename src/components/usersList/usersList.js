import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions';

class UsersList extends Component {

  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    if(!users.length) {
      return (
        <Fragment>
          <tr>
            <td>No users</td>
          </tr>
        </Fragment>
      )
    }
    return (
      <Fragment>
        {users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);

