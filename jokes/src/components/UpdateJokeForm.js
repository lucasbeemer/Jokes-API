import React from 'react';

const UpdateJokeForm = props => {
  return (
    <form>
      <input placeholder={props.friend.q} />
      <input placeholder={props.friend.p} />
    </form>
  );
};

export default UpdateJokeForm;