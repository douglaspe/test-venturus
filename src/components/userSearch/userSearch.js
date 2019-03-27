import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUser } from '../../actions';

class UserSearch extends Component {

  state = {
    inputValue: ''
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {

  return (
    <form className="navbar-form navbar-left" role="search">
      <div className="form-group">
        <input onChange={this.inputChange}
        type="text"
        className="form-control"
        placeholder="Search" />
      </div>
    </form>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.searchUsersReducer.newValue
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
