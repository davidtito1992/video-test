import React, { memo, useState, useEffect, useCallback } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import VideoCard from '../../components/MainVideoCard';
import Loading from '../../components/Loading';
import VideoModalPlayer from '../../components/VideoPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { getMainList } from '../../../redux/mainList/actions';
import { useRoute } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import styles from './styles';

const MainList = () => {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState({ isVisible: false, data: null });
  const [fullScreen, setFullScreen] = useState(false);
  const [portraitMode, setPortraitMode] = useState(true);

  const dispatch = useDispatch();
  const videos = useSelector(state => state?.mainList.videos);
  const route = useRoute();

  const loadPage = (pageNumber = page, shouldRefresh = false) => {
    if (loading) return;
    setLoading(true);
    setPage(page + 1);
    const data = videos?.slice(pageNumber * 8, 8);
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setLoading(false);
  };

  const refreshList = () => {
    setRefreshing(true);
    setPage(1);
    loadPage(0, true);
    setRefreshing(false);
  };

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  const renderItem = ({ item }) =>
    (item?.status === 'activa' || item?.type === 'home') && (
      <VideoCard
        key={item?._id?.toString()}
        {...item}
        setShowModal={setShowModal}
      />
    );

  const toggleModal = state => {
    setShowModal({
      isVisible: state.isVisible,
      data: state.data,
    });
  };

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

  useEffect(() => {
    dispatch(getMainList(route.params?.id));
  }, [route.params?.id]);

  useEffect(() => {
    if (videos?.length > 0) {
      setFeed(videos);
    }
  }, [videos]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        !portraitMode
          ? {
              width: '90%',
              alignSelf: 'center',
            }
          : null,
      ]}>
      {showModal.isVisible && (
        <VideoModalPlayer
          isVisible={showModal.isVisible}
          toggleModal={toggleModal}
          videoDetail={showModal.data}
          toggleFullScreen={toggleFullScreen}
          fullScreen={fullScreen}
          portraitMode={portraitMode}
        />
      )}
      <FlatList
        key="MainList"
        data={feed}
        keyExtractor={item => item?._id?.toString()}
        renderItem={renderItem}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 15,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.5}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading && <Loading />}
        initialNumToRender={5}
        maxToRenderPerBatch={2}
      />
    </SafeAreaView>
  );
};

export default memo(MainList);
