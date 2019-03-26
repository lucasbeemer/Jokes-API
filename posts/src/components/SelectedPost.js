import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
`;

export default function SelectedPost(props) {
  return (
    <div className="single-post">
      <h2>{props.selected.content}</h2>
      <ButtonContainer>
        <button onClick={() => props.handleDeletePost()}>{`Delete`}</button>
        <button onClick={() => props.toggleShowUpdate()}>{`Update`}</button>
      </ButtonContainer>
    </div>
  );
}