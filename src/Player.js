import React, { PureComponent } from "react";
import Counter from "./Counter";
import Proptypes from "prop-types";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    changeScore: Proptypes.func,
    removePlayer: Proptypes.func,
    name: Proptypes.string.isRequired,
    index: Proptypes.number,
    score: Proptypes.number.isRequired,
    id: Proptypes.number
  };

  render() {
    const {
      changeScore,
      score,
      name,
      removePlayer,
      index,
      player,
      isHighScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button
            onClick={() => removePlayer(player)}
            className="remove-player"
          >
            ✖
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;