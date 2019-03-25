import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.countPosts = this.countPosts.bind(this);
    this.countAlbums = this.countAlbums.bind(this);
    this.getAlbums = this.getAlbums.bind(this);
    this.countPhotos = this.countPhotos.bind(this);
  }

  countPosts(userId) {
    const { posts } = this.props;
    const postList =  posts.filter(function(post) {
      return post.userId === userId;
    });
    return postList.length;
  }

  countAlbums(userId) {
    const { albums } = this.props;
    const albumList =  albums.filter(function(album) {
      return album.userId === userId;
    });
    return albumList.length;
  }

  getAlbums(AlbumId) {
    const { albums } = this.props;

    const albumList =  albums.filter(function(album) {
      return album.userId === AlbumId;
    });

    return albumList;
  }

  countPhotos(userId) {
    const { photos } = this.props;
    const abC = this.getAlbums(userId);

    const photoList =  photos.filter(function(photo) {
      return photo.albumId === abC.id;
    });

    return photoList.length;
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
              <td>Always</td>
              <td>Every day</td>
              <td>{this.countPosts(user.id)}</td>
              <td>{this.countAlbums(user.id)}</td>
              <td>{this.countPhotos(user.id)}</td>
            </tr>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    posts: state.posts,
    albums: state.albums,
    photos: state.photos
  }
}

export default connect(mapStateToProps)(UsersList);
