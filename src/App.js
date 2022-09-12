import './App.css';

function Picture() {
  return (
    <div className="Picture">
      <img></img>
      <p></p>
    </div>
  )
}

function Gameboard() {
  return <div className="Gameboard">
    <Picture>
  </div>;
}

function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Score:</p>
      <p>Best Score:</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>The Guitar Memory Game</h1>
      <p>Don't click on any picture more than once!</p>
      <Scoreboard />
      <Gameboard />
    </div>
  );
}

export default App;
