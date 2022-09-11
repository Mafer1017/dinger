import React from "react";
import Header from "./Header"
import GameControl from "./CoffeeControl";
import styled from 'styled-components';

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
        <GameControl />
      </React.Fragment>
    </StyledWrapper>
  );
}

export default App;
