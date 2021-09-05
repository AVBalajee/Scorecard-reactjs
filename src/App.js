import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Balaji",
        score: 0,
        id: 1
      },
      {
        name: "Aswin",
        score: 0,
        id: 2
      },
      {
        name: "BIGIL",
        score: 0,
        id: 3
      },
      {
        name: "JD",
        score: 0,
        id: 4
      }
    ]
  };

  // Counter

  prevPlayerid = this.state.players.length;

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  removePlayer = player => {
    this.setState(currentState => ({
      players: currentState.players.filter(c => {
        return player.id !== c.id;
      })
    }));
  };

  

  addNewPlayer = name => {
    this.setState(prevContacts => ({
      players: [
        ...prevContacts.players,
        {
          name: name,
          score: 0,
          id: (this.prevPlayerid += 1)
        }
      ]
    }));
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      state: (prevState.players[index].score += delta)
    }));
  };



  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {this.state.players.map((player, index) => (
          <Player
            // key={player.id.toString()}
            id={player.id}
            player={player}
            index={index}
            score={player.score}
            name={player.name}
            removePlayer={this.removePlayer}
            changeScore={this.handleScoreChange}
            isHighScore={highScore === player.score}
            // score={player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.addNewPlayer} />
      </div>
    );
  }
}

export default App;