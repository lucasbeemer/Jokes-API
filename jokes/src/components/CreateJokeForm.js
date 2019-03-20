import React from "react";

 class JokeForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      q:"",
      p:"",
    }
  }


  inputChange(event) {
    const loc = event.target.name
    const val = event.target.value
    const newState = this.state;
    newState[loc] = val
    this.setState(
      newState
    )

  }

  onSubmit(event) {
    this.props.addJoke(this.state)
  }

  render() {
    return (
      <div className="newFriend">
        <label>
          <strong>Joke: </strong><input type="text" name="joke" onChange={this.inputChange.bind(this)} />
        </label>
        <label>
        <strong>Punchline: </strong><input type="text" name="punchline" onChange={this.inputChange.bind(this)} />
        </label>
        <button onClick={this.onSubmit.bind(this)}>Add</button>
      </div>
    )
  }
}

export default JokeForm;