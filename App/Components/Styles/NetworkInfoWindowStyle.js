import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, ThemeProvider, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  errorContainer: {
    height: Metrics.networkBannerHeight,
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
})
