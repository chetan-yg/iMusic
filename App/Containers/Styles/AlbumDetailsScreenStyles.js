import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding:Metrics.regularMargin,
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
    fontSize: Fonts.size.h4,
    marginLeft:Metrics.regularMargin,
    marginTop:Metrics.smallMargin,
  },
  itemSubLabel:{
    ...Fonts.style.medium,
    marginLeft:Metrics.regularMargin,
    marginTop:Metrics.regularMargin,
  },

  headerContainer:{
    ...ApplicationStyles.screen.rowFlex,
  },
  detailsContainer:{
    marginVertical:Metrics.regularMargin
  },
  detailLabel:{
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    marginTop:Metrics.smallMargin,
  },
  detailValue:{
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.regular,
  }

});
