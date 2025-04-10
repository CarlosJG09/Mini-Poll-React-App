import React, { useState } from "react";
import PollOption from "./PollOption";
import "./App.css"; // 👈 Import your styles here

function App() {
  const [votes, setVotes] = useState([
    { option: "Dog", count: 0 },
    { option: "Cat", count: 0 },
    { option: "Rat", count: 0 },
  ]);

  const handleVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index].count += 1;
    setVotes(updatedVotes);
  };

  const getLeader = () => {
    const max = Math.max(...votes.map((v) => v.count));
    const leaders = votes.filter((v) => v.count === max);
    if (max === 0) return "No votes yet!";
    if (leaders.length > 1) {
      return `It's a tie between ${leaders.map((l) => l.option).join(", ")} (${max} votes each)`;
    }
    return `${leaders[0].option} is winning with ${leaders[0].count} vote(s)!`;
  };

  return (
    <div className="app-container">
      <h1>Vote for the Best Pet!</h1>
      {votes.map((pet, index) => (
        <PollOption
          key={index}
          label={pet.option}
          count={pet.count}
          onVote={() => handleVote(index)}
        />
      ))}
      <div className="leader">🏆 Leader: {getLeader()}</div>
    </div>
  );
}

export default App;
