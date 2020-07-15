import React, { memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator animating size="small" color="#999" />
  </View>
);

export default memo(Loading);
