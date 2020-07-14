import React, { memo, useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native';
import VideoCard from '../../components/VideoCard';
import VideoModalPlayer from '../../screens/VideoPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { getHome } from '../../../redux/home/actions';
import styles from './styles';

const Loading = () => (
  <View
    style={{
      position: 'relative',
      paddingVertical: 20,
      marginTop: 10,
      marginBottom: 10,
    }}>
    <ActivityIndicator animating size="small" color="#999" />
  </View>
);

const Home = () => {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const videos = useSelector(state => state?.home?.videos);
  const [showModal, setShowModal] = useState({ isVisible: false, data: null });

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (loading) return;
    setLoading(true);
    setPage(page + 1);
    if (videos?.length <= pageNumber * 10) dispatch(getHome(pageNumber * 10));
    else {
      setLoading(false);
      const data = videos?.slice(pageNumber * 10);
      setFeed(shouldRefresh ? data : [...feed, ...data]);
    }
  };

  useEffect(() => {
    dispatch(getHome());
  }, []);

  useEffect(() => {
    if (videos?.length > 0) {
      setFeed(videos);
      setLoading(false);
    }
  }, [videos]);

  const refreshList = async () => {
    setRefreshing(true);
    setPage(1);
    await loadPage(0, true);
    setRefreshing(false);
  };

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  const renderItem = ({ item }) => (
    <VideoCard key={item.id.toString()} {...item} setShowModal={setShowModal} />
  );

  const toggleModal = state => {
    setShowModal({
      isVisible: state.isVisible,
      data: state.data,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {showModal.isVisible && (
        <VideoModalPlayer
          isVisible={showModal.isVisible}
          toggleModal={toggleModal}
          videoDetail={showModal.data}
        />
      )}
      <FlatList
        key="videos"
        data={feed}
        keyExtractor={item => item?.id?.toString()}
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

export default memo(Home);
