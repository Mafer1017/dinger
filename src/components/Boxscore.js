import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board'

class Boxscore extends Component{
  render() {

    const StyledWrapper = styled.section`
font-size: 24px;
text-align: center;
color: white;
background-color: teal;
display: inline-block;
float: left;
border-style: ridge;
border-color: black;

`;
    return (
      <StyledWrapper>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      </StyledWrapper>
    );
  }
}

export default Boxscore;