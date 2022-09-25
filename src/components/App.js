import React from "react";
import Header from "./Header";
import styled from 'styled-components';
import Game from './Game';

const DingerHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
  background-color: green;
  `;

const StyledWrapper = styled.section`
  background-color: yellow;
`;

function App() {
  return (
    <StyledWrapper>
      <React.Fragment>
        <Header />
        <Game />
      </React.Fragment>
    </StyledWrapper>
  );
}

export default App;
