import React from 'react';
import Comment from './Comment';

function Comments({ data }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{`${data.comments.length} comments`}</h3>
      {data.comments.map((commentInfo) => {
        return <Comment commentInfo={commentInfo} />;
      })}
    </div>
  );
}

export default Comments;
