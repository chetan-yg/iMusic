import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemContainer:{
    flex: 1,
    flexDirection: 'column',
    margin:Metrics.regularMargin,
  },
  itemImage:{
    justifyContent: 'center',
    alignItems: 'center',
    width:Metrics.image.large,
    height:Metrics.image.large,
    borderRadius:Metrics.regularBorderRadius,
  },
  itemLabel:{
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    marginTop:Metrics.baseMargin
  },
  itemSubLabel:{
    ...Fonts.style.medium
  },
  searchBar: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    borderColor: '#888888',
    fontSize: 18,
    height: 50,
  },
  noDataFound:{
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.regular,
  },
  emptyContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
