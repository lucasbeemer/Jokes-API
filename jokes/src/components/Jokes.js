import React from "react";
import Joke from "./Joke";

class Jokes extends React.Component {
  handleDelete = event => {
    this.props.deleteJoke(event.target.id);
  };

  render() {
    return (
      <div className="friends">
        {this.props.jokesFetched ? (
          this.props.jokes.map(joke => (
            <Joke
              key={joke.id}
              {...joke}
              onDelete={this.handleDelete}
              onUpdate={this.props.onUpdate}
            />
          ))
        ) : (
          <h2>Loading jokes...</h2>
        )}
      </div>
    );
  }
}

export default Jokes;