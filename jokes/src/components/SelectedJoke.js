import React from 'react';

export default function SelectedJoke(props) {
  return (
    <div>
      <h4>{props.selected.q}</h4>
      <span onClick={() => props.handleShowJoke({})}> X </span>
      <div>{props.selected.p}</div>
      <button onClick={() => props.handleDeleteJoke()}>{`Delete ${
        props.selected.q
      }`}</button>
      <button onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.q
      }`}</button>
    </div>
  );
}