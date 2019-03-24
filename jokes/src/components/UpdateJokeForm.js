import React from 'react';

const UpdateJokeForm = props => {
  return (
    <form>
      <input placeholder={props.joke.author} />
      <input placeholder={props.joke.content} />
    </form>
  );
};

export default UpdateJokeForm;