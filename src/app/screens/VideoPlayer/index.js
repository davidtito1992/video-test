import React, { useState, useEffect, memo } from 'react';
import { Modal, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import VideoFullPlayer from '../../components/VideoFullPlayer';
import VideoModal from './VideoModal';
import styles from './styles';

const VideoModalPlayer = props => {
  const [fullScreen, setFullScreen] = useState(false);
  const [portraitMode, setPortraitMode] = useState(true);

  const { videoDetail, toggleModal } = props;

  const toggleFullScreen = () => setFullScreen(fullScreen => !fullScreen);

  const handleOnBack = () =>
    toggleModal({
      isVisible: false,
      data: null,
    });

  const handleOrientation = orientation => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setFullScreen(true);
      setPortraitMode(false);
    } else {
      setFullScreen(false);
      setPortraitMode(true);
    }
  };

  useEffect(() => {
    Orientation.unlockAllOrientations();
    return () => Orientation.lockToPortrait();
  }, []);

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => Orientation.removeOrientationListener(handleOrientation);
  }, []);

  return (
    <Modal
      animationType={'fade'}
      supportedOrientations={['portrait', 'landscape']}
      transparent={true}
      visible={props.isVisible}>
      <View style={styles.wrapper}>
        {fullScreen || !portraitMode ? (
          <VideoFullPlayer
            videoSource={videoDetail?.videoFiles.mp4}
            onBack={handleOnBack}
            toggleFullScreen={toggleFullScreen}
            tapAnywhereToPause
          />
        ) : (
          <VideoModal
            videoSource={videoDetail?.videoFiles.mp4}
            onBack={handleOnBack}
            toggleFullScreen={toggleFullScreen}
            tapAnywhereToPause
          />
        )}
      </View>
    </Modal>
  );
};

export default memo(VideoModalPlayer);
