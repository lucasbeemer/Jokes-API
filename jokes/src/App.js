import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getJokes, addJoke, deleteJoke, updateJoke } from './actions'
import Jokes from './components/Jokes';
import JokeForm from './components/CreateJokeForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdate: false,
      updatingJoke: {}
    }
  }

  componentDidMount() {
    this.props.getJokes()
  }

  handleUpdate = event => {
    this.setState({
      isUpdate: true,
      updatingJoke: this.props.jokes.filter(joke => joke.id === event.target.id)[0]
    })
  }

  updateSubmit = joke => {
    this.setState({
      isUpdate: false,
      updatingJoke: {}
    })

    this.props.updateJoke(joke)
  }
  render() {
    return (
      <div className="App">
        <h1>Quick Jokes!</h1>
        <Jokes {...this.props} onUpdate={this.handleUpdate} />
        <JokeForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProsp = (state) => {
  return {
    fetchingJokes: state.fetchingJokes,
    jokesFetched: state.jokesFetched,
    jokes: state.jokes,
    error: state.error,
    updatingJoke: state.updatingJoke,
    jokeUpdated: state.jokeUpdated,
  }
}

export default connect(mapStateToProsp, {
  getJokes,
  addJoke,
  deleteJoke,
  updateJoke
})(App);