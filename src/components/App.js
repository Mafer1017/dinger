import React from "react";
import Header from "./Header";
import styled from 'styled-components';
import Game from './Game';
import Boxscore from './Boxscore';
import backgroundImage from ".././img/background.png";


function App() {
  const StyledWrapper = styled.section`
  font-size: 24px;
  font-family: sans-serif;
  text-align: center;
  color: white;
  background-color: green;
  `;

  const GameWrapper = styled.section`
    font-size: 24px;
    text-align: center;
    color: white;
    background-color: green;
    display: inline-block;
    float: right;
    border-style: ridge;
    border-color: black;
    
    `;
  
  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
      <StyledWrapper>
        <Header />
      </StyledWrapper>
        <GameWrapper>
      <Game />
      </GameWrapper>
      <Boxscore />
      </div>
      </React.Fragment>
  );
}

export default App;
