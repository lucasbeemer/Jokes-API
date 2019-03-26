import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { getPosts } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`Quick Posts`}</h1>
          <PostForm />
        </header>
        {this.props.error ? <h3>Error Fetching Posts</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingPosts ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Posts posts={this.props.posts} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { postsReducer } = state;
  return {
    posts: postsReducer.posts,
    error: postsReducer.error,
    gettingPosts: postsReducer.gettingPosts
  };
};

export default connect(mapStateToProps, { getPosts })(App);