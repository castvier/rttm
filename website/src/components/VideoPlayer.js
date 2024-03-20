import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-player-container">
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
        <div
          style={{
            position: 'relative',
            width: '1080px', // Width for 1080p resolution
            height: '608px', // Height calculated based on 16:9 aspect ratio
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src="https://www.youtube.com/embed/Dq8YhgH8hdg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube"
          />
        </div>
        <div
          style={{
            position: 'relative',
            width: '1080px', // Width for 1080p resolution
            height: '608px', // Height calculated based on 16:9 aspect ratio
            marginTop: '2rem',
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src="https://www.youtube.com/embed/FdwzPwGrFvQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="User Management Demo"
          />
        </div>
      </section>
    </div>
  );
};

export default VideoPlayer;