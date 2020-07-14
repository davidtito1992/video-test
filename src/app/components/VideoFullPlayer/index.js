import React, { memo } from 'react';
import VideoPlayer from 'react-native-video-controls';

const VideoFullPlayer = ({ toggleFullScreen, videoSource, ...props }) => {
  return (
    videoSource && (
      <VideoPlayer
        source={{
          uri: videoSource,
        }}
        resizeMode="contain"
        toggleResizeModeOnFullscreen={false}
        onEnterFullscreen={toggleFullScreen}
        onExitFullscreen={toggleFullScreen}
        {...props}
      />
    )
  );
};

export default memo(VideoFullPlayer);
