import React from "react";

const PollOption = ({ label, count, onVote }) => {
  return (
    <div className="poll-option">
      <strong>{label} — {count} vote(s)</strong>
      <button className="vote-button" onClick={onVote}>
        Vote
      </button>
    </div>
  );
};

export default PollOption;
