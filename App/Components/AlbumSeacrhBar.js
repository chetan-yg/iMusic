import React from 'react';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AlbumItem from './AlbumItem';
import styles from './Styles/AlbumStyle';

const AlbumSearchBar = (props) => {
  const [query, setQuery] = useState('');

 
  const onSearchChanged = (text) => {

    setQuery(text);
    props.onSearchChanged(text)
  };

  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      clearButtonMode="always"
      value={query}
      onChangeText={(queryText) => onSearchChanged(queryText)}
      placeholder="Search"
      style={styles.searchBar}
    />
  );
};

export default AlbumSearchBar;
