import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchAllPosts } from '../../actions';

class UsersPosts extends Component {

  constructor(props){
    super(props);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPosts() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;
    console.log(posts)

    if(!posts.length) {
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
        {posts.map(post => {
          return (
            <tr key={post.id}>
              <td>{post.title}</td>
            </tr>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchAllPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersPosts);

