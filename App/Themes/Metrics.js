import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  baseMargin:8,
  regularMargin:16
}

export default metrics
