import React from 'react';
import ReactDOM from 'react-dom';
import BoardView from './Component/Board';
import Popup from './Component/popup';
import Player from './Component/Player';
import "./main.css";
import "./styles.css";
import logo from './logo.gif';
import welcome from './welcome.png';
import { useState, useEffect } from 'react';

function App(){
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);

  return(
    <><img className="logo" src={logo} alt="Logo" /><><BoardView /><div className="App">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <div>
          <img className="welcome" src={welcome} alt="Welcome"></img>
          <p className="popup-text"><b>HOW TO PLAY : </b>
          Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!</p>
        </div>
      </Popup>
      <Player />
    </div></></>
  )
}

ReactDOM.render(
 <App />
,document.getElementById("root")
)