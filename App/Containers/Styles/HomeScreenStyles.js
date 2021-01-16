import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding:Metrics.regularMargin,
  },
  title:{
    ...ApplicationStyles.screen.title,
    margin:Metrics.regularMargin
  },
  itemContainer:{
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    borderRadius:10,
    marginBottom:16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage:{
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    height:150,
    borderRadius:10
  },
  itemLabel:{
    ...Fonts.style.normal
  }
});
