import React from "react";
import Header from "./Header";
import styled from 'styled-components';
import Game from './Game';
import backgroundImage from ".././img/background.png";

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
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
      </div>
      </React.Fragment>
    </StyledWrapper>
  );
}

export default App;
