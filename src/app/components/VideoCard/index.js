import React, { memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import like from '../../../assets/images/like.png';
import play from '../../../assets/images/play.png';
import Config from 'react-native-config';
import styles from './styles';

const Card = ({ setShowModal, ...props }) => {
  const { title, subtitle, summary, related } = props || {};

  const handleOnPress = () =>
    setShowModal({
      isVisible: true,
      data: props,
    });

  const renderSummary = () =>
    summary?.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.summary}>{renderSummary()}</Text>
      <TouchableOpacity onPress={handleOnPress} style={styles.imageContainer}>
        <Image
          source={{
            uri: `${Config.BASE_URL_IMAGE}${related?.relatedImages[0]?.url}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Image source={play} style={styles.overlayHeart} />
        </View>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
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
