import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './components/Jokes';
import JokeForm from './components/JokeForm';
import { getJokes } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getJokes();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`Quick Jokes`}</h1>
          <JokeForm />
        </header>
        {this.props.error ? <h3>Error Fetching Jokes</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingJokes ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Jokes jokes={this.props.jokes} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { jokesReducer } = state;
  return {
    jokes: jokesReducer.jokes,
    error: jokesReducer.error,
    gettingJokes: jokesReducer.gettingJokes
  };
};

export default connect(mapStateToProps, { getJokes })(App);