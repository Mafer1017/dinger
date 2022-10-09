import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board'

class Boxscore extends Component{
  render() {

    const StyledWrapper = styled.section`
      font-size: 24px;
      text-align: center;
      color: white;
      background-color: green;
      display: inline-block;
      float: right;
      border-style: ridge;
      border-color: black;
      padding: 10px;
      margin-right: 300px;
    `;
    return (
      <StyledWrapper>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        </div>
      </div>
      </StyledWrapper>
    );
  }
}

export default Boxscore;