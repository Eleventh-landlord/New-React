import React from "react";

function ScoreBoard({ score, total }) {
  return (
    <div className="scoreboard">
      Score: {score}/{total}
    </div>
  );
}

export default ScoreBoard;
