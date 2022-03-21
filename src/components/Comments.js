import React, { useState } from 'react';
import Comment from './Comment';

function Comments({ data }) {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: '2%' }}>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search by username"
        value={query}
      />
      <h3>{`${data.comments.length} comments`}</h3>
      {data.comments
        .filter((commentInfo) => {
          console.log(commentInfo.user);
          console.log(query);
          return commentInfo.user.includes(query) || query === '';
        })
        .map((commentInfo) => {
          return <Comment commentInfo={commentInfo} query={query} />;
        })}
    </div>
  );
}

export default Comments;
