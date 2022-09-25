import React from "react";
import Header from "./Header";
import styled from 'styled-components';
import Game from './Game';

const DingerHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
  background-color: yellow;
  `;

const StyledWrapper = styled.section`
font-size: 24px;
text-align: center;
color: white;
background-color: green;
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
