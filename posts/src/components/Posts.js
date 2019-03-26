import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import SelectedPost from './SelectedPost';
import { connect } from 'react-redux';
import { deletePost, updateSinglePost, toggleShowUpdate } from '../actions';
import UpdatePostForm from './UpdatePostForm.js';
import styled from 'styled-components';

const PostText = styled.div`
  width: auto;
  border-bottom: 1px solid white;
  color: white;
  font-size: 20px;
  padding: 10px 0px;
  margin-bottom: 30px;
  list-style: none;
    &:hover {
      color: #0f0f0f;
      cursor: pointer;
      border-bottom: 1px solid #222;

    }
`;

class Posts extends Component {
  handleDeletePost = () => {
    const { id } = this.props.postSelected;
    this.props.deletePost(id);
  };

  handleShowPost = post => {
    this.props.updateSinglePost(post);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };
  render() {
    return (
      <div className="post-Container">
        <div className="post-List">
          {this.props.posts.map(post => {
            return (
              <div className="post" onClick={() => this.handleShowPost(post)} key={post.id}>
                <h2>Posted by: {post.author}</h2>
                <PostText>{post.content}</PostText>
              </div>
            );
          })}
        </div>
        {Object.keys(this.props.postSelected).length > 0 ? (
          <SelectedPost
            handleShowPost={this.handleShowPost}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeletePost={this.handleDeletePost}
            selected={this.props.postSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdatePostForm post={this.props.postSelected} />
        ) : null}
        {this.props.deletingPost ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingPost: state.postsReducer.deletingPost,
    error: state.postsReducer.error,
    showUpdate: state.singlePostReducer.showUpdate,
    postSelected: state.singlePostReducer.postSelected
  };
};

export default connect(mapStateToProps, {
  deletePost,
  updateSinglePost,
  toggleShowUpdate
})(Posts);