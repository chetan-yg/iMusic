import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Styles/AlbumDetailsScreenStyles';

const AlbumDetailsScreen = (props) => {
  const {itemData} = props.route.params;
  const {artworkUrl100, collectionName, trackName,artistName,releaseDate, trackPrice, currency} = itemData || {};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.itemImage} source={{uri: artworkUrl100}} />
        <View style={styles.fullFlex}>
          <Text numberOfLines={2} style={styles.itemLabel}>
            {trackName}
          </Text>
          <Text numberOfLines={3} style={styles.itemSubLabel}>
            {collectionName}
          </Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.detailLabel}>
          {'Artist Name :'}{' '}
          <Text numberOfLines={1} style={styles.detailValue}>
            {artistName}
          </Text>
        </Text>

        <Text numberOfLines={1} style={styles.detailLabel}>
          {'Release Date :'}{' '}
          <Text numberOfLines={1} style={styles.detailValue}>
            {releaseDate}
          </Text>
        </Text>

        <Text numberOfLines={1} style={styles.detailLabel}>
          {'Price :'}{' '}
          <Text numberOfLines={1} style={styles.detailValue}>
            {`${trackPrice} ${currency}`}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default AlbumDetailsScreen;
