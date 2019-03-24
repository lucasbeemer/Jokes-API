import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import SelectedJoke from './SelectedJoke';
import { connect } from 'react-redux';
import { deleteJoke, updateSingleJoke, toggleShowUpdate } from '../actions';
import UpdateJokeForm from './UpdateJokeForm.js';
import styled from 'styled-components';

const JokeText = styled.div`
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
        <div className="Joke-List">
          {this.props.jokes.map(joke => {
            return (
              <div className="joke" onClick={() => this.handleShowJoke(joke)} key={joke.id}>
                <h2>Posted by: {joke.author}</h2>
                <JokeText>{joke.content}</JokeText>
              </div>
            );
          })}
        </div>
        {Object.keys(this.props.jokeSelected).length > 0 ? (
          <SelectedJoke
            handleShowjoke={this.handleShowJoke}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteJoke={this.handleDeleteJoke}
            selected={this.props.jokeSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdateJokeForm joke={this.props.jokeSelected} />
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