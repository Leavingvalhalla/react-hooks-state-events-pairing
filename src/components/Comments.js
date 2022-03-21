import React, { useState } from 'react';

function Comments({ data }) {
  const [upvotes, setUpvotes] = useState('0');

  function handleVote(vote) {
    if (vote === 'up') {
      setUpvotes((upvotes) => upvotes + 1);
    } else setUpvotes((upvotes) => upvotes - 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{`${data.comments.length} comments`}</h3>
      {data.comments.map((comment) => {
        return (
          <>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>
              <p>{upvotes}</p>
              <button onClick={() => handleVote('up')}>👍</button>
              <button onClick={() => handleVote('down')}>👎</button>
            </span>
          </>
        );
      })}
    </div>
  );
}

export default Comments;
