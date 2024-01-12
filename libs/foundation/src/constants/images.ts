import { Image } from 'react-native';

const icons = {
  test: Image.resolveAssetSource(require('../assets/images/ic_close_red.png')),
};

const images = {
  // Vodafone Logo Images
  logo_vf_white: Image.resolveAssetSource(require('../Assets/Images/Logo/white.png')),
  logo_vf_red: Image.resolveAssetSource(require('../Assets/Images/Logo/red.png')),
  // Icon Images
  ic_hide_password: Image.resolveAssetSource(
    require('./../Assets/Images/Icons/icHidePassword.png'),
  ),
};

export { images, icons };
