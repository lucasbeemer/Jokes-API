import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import SelectedJoke from './SelectedJoke';
import { connect } from 'react-redux';
import { deleteJoke, updateSingleJoke, toggleShowUpdate } from '../actions';
import UpdateJokeForm from './UpdateJokeForm.js';

class Jokes extends Component {
  handleDeleteJoke = () => {
    const { id } = this.props.jokeSelected;
    this.props.deleteJoke(id);
  };

  handleShowJoke = joke => {
    this.props.updateSingleJoke(joke);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };
  render() {
    return (
      <div className="Joke-Container">
        <ul className="Joke-List">
          {this.props.jokes.map(joke => {
            return (
              <li onClick={() => this.handleShowJoke(joke)} key={joke.id}>
                {joke.name}
              </li>
            );
          })}
        </ul>
        {Object.keys(this.props.jokeSelected).length > 0 ? (
          <SelectedJoke
            handleShowjoke={this.handleShowJoke}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteJoke={this.handleDeleteJoke}
            selected={this.props.JokeSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdateJokeForm friend={this.props.jokeSelected} />
        ) : null}
        {this.props.deletingJoke ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingJoke: state.jokesReducer.deletingJoke,
    error: state.jokesReducer.error,
    showUpdate: state.singleJokeReducer.showUpdate,
    jokeSelected: state.singleJokeReducer.jokeSelected
  };
};

export default connect(mapStateToProps, {
  deleteJoke,
  updateSingleJoke,
  toggleShowUpdate
})(Jokes);