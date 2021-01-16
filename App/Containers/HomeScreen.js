import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import StringsConstants from '../Constants/StringsConstants';
import {searchItunesAction} from '../Redux/Actions/ITunesActions';
import styles from './Styles/HomeScreenStyles';

const HomeScreen = (props) => {
  const iTunesSearchResponse = useSelector((state) => state.iTunesSearch); //mapStateToProps
  const dispatch = useDispatch(); //mapDispatchToProps
  console.log('\n \n HomeScreen RESULTS iTunesSearchResponse 1 ==> '+ JSON.stringify(iTunesSearchResponse));
  const {payload} = iTunesSearchResponse || {};
  const {results} = payload || {};
  // console.log('\n \n HomeScreen RESULTS 2 ==> ' + JSON.stringify(results));
  useEffect(() => {
    const params = {
      term: 'jack+johnson.',
    };
    dispatch(searchItunesAction(params));
  }, []);

  renderItemComponent = (itemData) => {
    return (
      <View style={styles.itemContainer}>
         <Image style={styles.itemImage} source={{ uri: itemData.artworkUrl100 }} />
        <Text style={styles.itemLabel}>{itemData.artistName}</Text>
      </View>
    );
  };

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{StringsConstants.BROWSE}</Text>
      <FlatList
        data={results}
        renderItem={(item) => this.renderItemComponent(item.item)}
        keyExtractor={(item) => item.trackId.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
