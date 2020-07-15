import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 4,
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    padding: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  summary: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    padding: 0,
    margin: 0,
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
    marginBottom: 12,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    tintColor: '#000',
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
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  likeContainer: {
    alignSelf: 'flex-start',
    marginLeft: 4,
    marginVertical: 2,
  },
});
