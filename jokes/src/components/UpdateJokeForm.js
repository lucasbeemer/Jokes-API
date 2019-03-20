import React from 'react';

const UpdateJokeForm = props => {
  return (
    <form>
      <input placeholder={props.joke.name} />
      <input placeholder={props.joke.p} />
    </form>
  );
};

export default UpdateJokeForm;