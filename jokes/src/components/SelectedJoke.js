import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
`;

export default function SelectedJoke(props) {
  return (
    <div className="single-joke">
      <h2>{props.selected.content}</h2>
      <ButtonContainer>
        <button onClick={() => props.handleDeleteJoke()}>{`Delete`}</button>
        <button onClick={() => props.toggleShowUpdate()}>{`Update`}</button>
      </ButtonContainer>
    </div>
  );
}