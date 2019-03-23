import React, { Component } from 'react';
import axios from 'axios';

const api = 'https://jsonplaceholder.typicode.com/users';
const initialState = {
    user: { name: '', email: '' },
    list: []
}

class UsersList extends Component {

    state = { ...initialState }

    componentWillMount() {
      axios(api).then(resp => {
          this.setState({ list: resp.data })
      })
  }

  render() {
  return this.state.list.map(user => {
    
      return(
        <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
      )
      
  })
  }
}

export default UsersList;

