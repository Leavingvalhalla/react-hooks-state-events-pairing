import React from 'react';

function Video({ data }) {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={data.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}

export default Video;
