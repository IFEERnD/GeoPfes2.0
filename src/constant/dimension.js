import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const perWidth = w => {
  return wp(w);
};

const perHeight = h => {
  return hp(h);
};

export default {
  perWidth,
  perHeight,
};
