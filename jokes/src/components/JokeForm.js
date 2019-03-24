import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createJoke } from '../actions';

class JokeForm extends Component {
  state = {
    author: '',
    content: '',
  };
  handleInputChange = event => {
    this.setState({ [event.target.author]: event.target.value });
  };

  handleAddJoke = _ => {
    const { author, content, } = this.state;
    this.props.createJoke({ author, content });
    this.setState({ author: '', content: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.author}
          name="author"
          type="text"
          placeholder="posted by"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.content}
          name="content"
          type="text"
          placeholder="joke set-up and punchline"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddJoke()} type="button">
          Add Joke
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingJoke: state.creatingJoke
  };
};

export default connect(mapStateToProps, { createJoke })(JokeForm);