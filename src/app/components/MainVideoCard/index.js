import React, { memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import like from '../../../assets/images/like.png';
import play from '../../../assets/images/play.png';
import oleTV from '../../../assets/images/oletv.png';
import styles from './styles';

const Card = ({ setShowModal, ...props }) => {
  const handleOnPress = () =>
    setShowModal({
      isVisible: false,
      data: props,
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
        {props.name}
      </Text>
      <TouchableOpacity
        onPress={handleOnPress}
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <Image source={oleTV} style={styles.image} resizeMode="cover" />
        <View style={styles.overlay}>
          <Image source={play} style={styles.overlayHeart} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('test')}
        style={styles.likeContainer}>
        <Image source={like} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Card);
