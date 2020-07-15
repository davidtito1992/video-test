import React, { memo } from 'react';
import { Modal, View } from 'react-native';
import VideoFullPlayer from '../VideoFullPlayer';
import VideoModal from '../VideoModal';
import styles from './styles';

const VideoModalPlayer = ({
  videoDetail,
  toggleModal,
  isVisible,
  toggleFullScreen,
  fullScreen,
  portraitMode,
}) => {
  const handleOnBack = () =>
    toggleModal({
      isVisible: false,
      data: null,
    });

  return (
    <Modal
      animationType={'fade'}
      supportedOrientations={['portrait', 'landscape']}
      transparent={true}
      visible={isVisible}>
      <View style={styles.wrapper}>
        {fullScreen ? (
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
