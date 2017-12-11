import React, { Component } from 'react';
import './App.css';
import Game from './Game/Container';
import PEWPEW from './Game/Assets/pewpew.jpg';

class App extends Component {

  render() {
    return (
        <div className="backgroundDiv"  >
            <Game />
        </div>
    );
  }
}

export default App;


/*
style={{backgroundImage: `url(${PEWPEW})`}}

.backgroundDiv{
  min-width: 100vw;
  min-height: 100vh;
  background-repeat: repeat;
  background-size: 200px;
}
*/