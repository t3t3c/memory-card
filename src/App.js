import React, { Component, useEffect, useState } from 'react';
import './App.css';
import missionPassed from './img/mission-passed.gif';

import getCharacters from './components/getCharacters';
import gtaTheme from './static/SA-theme.mp3';

function Picture(props) {
  function handleClick(event) {
    props.saveClicked(event);
  }
  return (
    <div
      className="Picture"
      onClick={handleClick}
      data-name={props.character.name}
    >
      <img src={props.character.photo} alt={props.character.name} />
      <p>{props.character.name}</p>
    </div>
  );
}

function WinImage(props) {
  if (props.hasWon) {
    return (
      <img
        alt="Mission Passed"
        src={missionPassed}
        className="mission-passed"
      />
    );
  } else {
    return false;
  }
}

function Gameboard() {
  const [level, setLevel] = useState(12);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const arrCharacters = getCharacters(level);

  function saveClicked(event) {
    // currentTarget targets element that had EventListener attached to it
    const name = event.currentTarget.dataset.name;
    if (clicked.includes(name)) {
      setClicked([]);
      setScore(0);
    } else {
      const newScore = score + 1;
      setClicked([...clicked, name]);
      setScore(newScore);
      if (newScore > maxScore) {
        setMaxScore(newScore);
      }
    }
  }
  useEffect(() => {
    if (maxScore >= 10) {
      setHasWon(true);
    }
  }, [maxScore]);
  return (
    <div>
      <WinImage hasWon={hasWon} />
      <Scoreboard score={score} maxScore={maxScore} />
      <div className="Gameboard">
        {arrCharacters.map((character) => (
          <Picture
            character={character}
            className="Picture"
            saveClicked={saveClicked}
            key={character.name}
          />
        ))}
      </div>
    </div>
  );
}

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
      <p>Score: {props.score}</p>
      <p>Best Score: {props.maxScore}</p>
    </div>
  );
}

class Song extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(gtaTheme),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  render() {
    return (
      <div>
        {/* Show state of song on website */}
        <p>{this.state.isPlaying ? 'Soundtrack is on' : 'Soundtrack is off'}</p>

        {/* Button to call our main function */}
        <button onClick={this.playPause}>Play | Pause</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Song />
      <h1>GTA San Andreas Memory Game</h1>
      <p>Don't click on any picture more than once! Get 10 points to win.</p>
      <Gameboard />
    </div>
  );
}

export default App;
