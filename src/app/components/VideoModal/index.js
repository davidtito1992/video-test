import React, { memo } from 'react';
import { TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import VideoFullPlayer from '../VideoFullPlayer';
import styles from './styles';

const VideoModal = props => {
  const { onBack } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onBack}>
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View style={styles.videoPlayerContainer}>
              <VideoFullPlayer {...props} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  );
};

export default memo(VideoModal);
