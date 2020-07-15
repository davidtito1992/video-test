import React, { memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import like from '../../../assets/images/like.png';
import play from '../../../assets/images/play.png';
import HTML from 'react-native-render-html';
import styles from './styles';

const Card = ({ setShowModal, ...props }) => {
  const handleOnPress = () =>
    setShowModal({
      isVisible: true,
      data: props,
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {props.title}
      </Text>
      <HTML
        html={props.summary}
        tagsStyles={{
          p: styles.summary,
        }}
      />
      <TouchableOpacity onPress={handleOnPress} style={styles.imageContainer}>
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
        {props.subtitle && (
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('favorito')}
        style={styles.likeContainer}>
        <Image source={like} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Card);
