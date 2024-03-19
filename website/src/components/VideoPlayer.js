import React from 'react';

const VideoPlayer = () => {
  return (
    <section>
      <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: '25px', height: 0 }}>
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src="https://www.youtube.com/embed/Dq8YhgH8hdg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </section>
  );
};

export default VideoPlayer;
