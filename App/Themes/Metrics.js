import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {

  smallMargin:4,
  baseMargin:8,
  regularMargin:16,

  baseBorderRadius:6,
  regularBorderRadius:10,

  networkBannerHeight:25,
  image:{
    large:150
  }
}

export default metrics
