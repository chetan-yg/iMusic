import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppConstants} from '../Constants';
import {navigate} from '../Services/NavigationService';
import styles from './Styles/AlbumStyle';

const AlbumItem = (props) => {
  const {artworkUrl100, collectionName, trackName} = props.itemData;

  const onItemPress = () => {
    navigate(
      props.navigation,
      AppConstants.NAVIGATIONS.SCREENS.ALBUM_DETAILS_SCREEN,
      {
        itemData: props.itemData,
      },
    );
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onItemPress(props.itemData)}>
        <Image style={styles.itemImage} source={{uri: artworkUrl100}} />
        <Text numberOfLines={1} style={styles.itemLabel}>
          {trackName}
        </Text>
        <Text numberOfLines={1} style={styles.itemSubLabel}>
          {collectionName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumItem;
