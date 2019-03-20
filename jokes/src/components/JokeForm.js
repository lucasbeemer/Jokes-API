import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createJoke } from '../actions';

class JokeForm extends Component {
  state = {
    q: '',
    p: '',
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddJoke = _ => {
    const { q, p, } = this.state;
    this.props.createJoke({ q, p, });
    this.setState({ q: '', p: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.q}
          name="q"
          type="text"
          placeholder="joke set-up"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.p}
          name="p"
          type="text"
          placeholder="punchline"
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