import React from 'react';
import {FlatList, Text, View} from 'react-native';
import AlbumItem from './AlbumItem';
import styles from './Styles/AlbumStyle';

const AlbumList = (props) => {
  renderItemComponent = (itemData) => <AlbumItem itemData={itemData} navigation={props.navigation}/>;
  _keyExtractor = (item, index) => index;
  return (
    props.albumData && props.albumData.length > 0?
    <FlatList
      data={props.albumData}
      renderItem={(item) => this.renderItemComponent(item.item)}
      keyExtractor={this._keyExtractor}
      numColumns={2}
    />
    :
    <View style={styles.emptyContainer}>
    <Text style={styles.noDataFound}>No songs found! </Text>
    </View>
  );
};

export default AlbumList;
