import React, { useState } from 'react';

function Comment({ commentInfo }) {
  const [upvotes, setUpvotes] = useState('0');

  function handleVote(vote) {
    if (vote === 'up') {
      setUpvotes((upvotes) => upvotes + 1);
    } else setUpvotes((upvotes) => upvotes - 1);
  }

  return (
    <div>
      <h4>{commentInfo.user}</h4>
      <p>{commentInfo.comment}</p>
      <span>
        <p>{upvotes}</p>
        <button onClick={() => handleVote('up')}>👍</button>
        <button onClick={() => handleVote('down')}>👎</button>
      </span>
    </div>
  );
}

export default Comment;
