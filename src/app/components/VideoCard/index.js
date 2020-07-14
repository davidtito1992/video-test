import React, { memo } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import like from '../../../assets/images/like.png';
import play from '../../../assets/images/play.png';
import styles from './styles';

const Card = ({ setShowModal, ...props }) => {
  const handleOnPress = () =>
    setShowModal({
      isVisible: true,
      data: props,
    });

  return (
    <View style={{ marginBottom: 10, alignItems: 'center' }}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
        {props.title}
      </Text>
      <TouchableOpacity
        onPress={handleOnPress}
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: `https://www.ole.com.ar${
              props?.related?.relatedImages[0]?.url
            }`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Image source={play} style={styles.overlayHeart} />
        </View>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </TouchableOpacity>
      <Text style={styles.summary} ellipsizeMode="tail" numberOfLines={2}>
        {props.summary}
      </Text>
      {/*       <TouchableOpacity onPress={() => console.log('test')}>
        <Image source={like} style={{ ...styles.icon, marginLeft: 0 }} />
      </TouchableOpacity> */}
    </View>
  );
};

export default memo(Card);
