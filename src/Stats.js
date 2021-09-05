import React from "react";
import PropTypes from 'prop-types';

const Stats = ({ players }) => {
  let totalScore = players.length;
  let totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalScore}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.prototype = {
  players:PropTypes.arrayOf(PropTypes.object)
}

export default Stats;