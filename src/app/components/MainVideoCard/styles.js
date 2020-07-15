import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    paddingHorizontal: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  summary: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  subtitle: {
    position: 'absolute',
    top: 190,
    left: 10,
    color: '#FFF',
    backgroundColor: '#457BF0',
    paddingHorizontal: 8,
    fontWeight: '700',
    borderRadius: 2,
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 8,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    tintColor: '#000',
  },
  playImage: {
    position: 'absolute',
    width: 100,
    height: 100,
    marginLeft: 15,
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlayHeart: {
    width: 80,
    height: 80,
  },
  likeContainer: {
    alignSelf: 'flex-start',
    marginLeft: 4,
  },
});
