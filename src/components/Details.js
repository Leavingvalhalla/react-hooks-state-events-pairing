import React, { useState } from 'react';

function Details({ data, handleCommentClick, showComments }) {
  const [upvotes, setUpvotes] = useState(data.upvotes);
  const [downvotes, setDownvotes] = useState(data.downvotes);

  function handleUpvoteClick() {
    setUpvotes((upvotes) => upvotes + 1);
  }

  function handleDownvoteClick() {
    setDownvotes((downvotes) => downvotes + 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{data.title}</h1>
      <p>{`${data.views} views | Uploaded ${data.createdAt}`}</p>
      <button onClick={handleUpvoteClick}>{upvotes + ' 👍'}</button>
      <button onClick={handleDownvoteClick}>{downvotes + ' 👎'}</button>
      <br />
      <br />
      <button onClick={handleCommentClick}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
    </div>
  );
}

export default Details;
