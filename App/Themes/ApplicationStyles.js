import Metrics from './Metrics';
import Fonts from './Fonts';
import Colors from './Colors';

const ApplicationStyles = {
  screen: {
    fullFlex: {
      flex: 1,
    },
    rowFlex: {
      flexDirection: 'row',
    },
    title: {
      ...Fonts.style.h4,
    },
  },
};

export default ApplicationStyles;
