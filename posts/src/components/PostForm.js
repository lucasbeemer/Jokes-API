import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostForm extends Component {
  state = {
    author: '',
    content: '',
    upvotes: ''
  };
  
  handleInputChange = event => {
    this.setState({ [event.target.author]: event.target.value });
  };

  handleAddPost = _ => {
    const { author, content, upvotes } = this.state;
    this.props.createPost({ author, content });
    this.setState({ author: '', content: '', upvotes: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.author}
          name="author"
          type="text"
          placeholder="Posted by"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.content}
          name="content"
          type="text"
          placeholder="Your post here"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddPost()} type="button">
          Add Post
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingPost: state.creatingPost
  };
};

export default connect(mapStateToProps, { createPost })(PostForm);