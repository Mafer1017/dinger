import React from "react";
import './App.css'
import Header from "./Header";
import styled from 'styled-components';
import Game from './Game';
import Boxscore from './Boxscore';
import backgroundImage from ".././img/background.png";


function App() {
  const StyledWrapper = styled.section`
  font-size: 42px;
  font-family: sans-serif;
  text-align: center;
  color: white;
  background-color: green;
  margin-top: -50px;
  `;

  const GameWrapper = styled.section`
    font-size: 24px;
    text-align: center;
    color: white;
    background-color: green;
    text-decoration: underline;
    display: inline-block;
    float: left;
    border-style: ridge;
    border-color: black;
    padding: 10px;
    margin-left: 300px
    
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
