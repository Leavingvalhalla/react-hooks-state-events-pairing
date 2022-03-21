import React, { useState } from 'react';
import video from '../data/video.js';
import Video from './Video';
import Details from './Details';
import Comments from './Comments';

function App() {
  const [showComments, setShowComments] = useState(true);

  function handleCommentClick() {
    setShowComments(!showComments);
  }

  return (
    <>
      <Video data={video} />
      <Details
        data={video}
        handleCommentClick={handleCommentClick}
        showComments={showComments}
      />
      {showComments && <Comments data={video} />}
    </>
  );
}

export default App;
