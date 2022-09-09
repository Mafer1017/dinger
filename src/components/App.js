import React from "react";
import Header from "./Header"
import GameControl from "./GameControl"

function App() {
  const appStyles = {
    backgroundColor: '#dde6d5',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <React.Fragment>
      <div style={appStyles}>
      <Header />
      <GameControl />
      </div>
    </React.Fragment>
  );
}

export default App;
