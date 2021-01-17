import React, {useEffect} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AlbumList from '../Components/AlbumList';
import AlbumSearchBar from '../Components/AlbumSeacrhBar';
import StringsConstants from '../Constants/StringsConstants';
import {searchItunesAction} from '../Redux/Actions/ITunesActions';
import styles from './Styles/HomeScreenStyles';

const HomeScreen = (props) => {
  const iTunesSearchResponse = useSelector((state) => state.iTunesSearch); //mapStateToProps
  const dispatch = useDispatch(); //mapDispatchToProps
  console.log(
    '\n \n HomeScreen RESULTS iTunesSearchResponse 1 ==> ' +
      JSON.stringify(iTunesSearchResponse),
  );
  const {payload, fetching} = iTunesSearchResponse || {};
  const {results} = payload || {};
  // console.log('\n \n HomeScreen RESULTS 2 ==> ' + JSON.stringify(results));
  useEffect(() => {
    const params = {
      term: 'jack+johnson.',
      limit:10,
      entity:'musicTrack'
    };
    dispatch(searchItunesAction(params));
  }, []);

  renderItemComponent = (itemData) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemImage}
          source={{uri: itemData.artworkUrl100}}
        />
        <Text style={styles.itemLabel}>{itemData.artistName}</Text>
      </View>
    );
  };

  const onSearchChanged = (text) => {
    const formattedQuery = text.toLowerCase();
    const params = {
      term: formattedQuery,
      limit:10,
      entity:'musicTrack'
    };
    dispatch(searchItunesAction(params));
  };

  return (
    <View style={styles.container}>
      <AlbumSearchBar onSearchChanged={onSearchChanged} />
      <Text style={styles.title}>{StringsConstants.BROWSE}</Text>
      {fetching ? (
        <ActivityIndicator />
      ) : (
        <AlbumList albumData={results} navigation={props.navigation} />
      )}
    </View>
  );
};

export default HomeScreen;
