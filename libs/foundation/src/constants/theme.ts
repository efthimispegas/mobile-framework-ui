/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */
import { Platform } from 'react-native';

import { Colors as VFColors } from '@vfgroup-oneplatform/foundation/Components/Themes';

/**
 * Colors
 */
export const Colors = {
  inputBackground: '#FFFFFF',
  // Typography
  textDark: '#000000',
  textGray: '#4D4D4D',
  textLight: '#ffffff',
  primary: '#143055',
  secondary: '#28a745',
  // ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  /**
   * OneApp color pallette
   * for more information about the OneApp theming see
   * https://github.vodafone.com/pages/VFGroup-MyVodafone-OnePlatform/Documentation/documentation/oneplatform/react-components/foundation/themes/#themeprovider
   *  */
  ...VFColors,
  vfRed: '#E60000',
};

/**
 * FontSize
 */
export const FontSize = {
  h1: 38, // title
  h2: 34, // subtitle
  h3: 30, // xxl
  h4: 26, // xl
  h5: 20, // lg
  h6: 19, // md
  input: 18,
  body: 17, // sm
  bodySmall: 16,
  caption: 14, // xs
  small: 12,
  tiny: 8.5,
};

/**
 * Metrics Sizes
 */
const xs = 4;
const sm = xs * 2; // 8
const md = xs * 3; // 12
const lg = sm * 2; // 16
const xl = xs * 5; // 20
const xxl = md * 2; // 24

export const MetricsSizes = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
};

export const FontWeight = {
  base: 'Avenir-Book',
  emphasis: 'HelveticaNeue-Italic',
  VFFont: Platform.OS === 'ios' ? 'Vodafone Rg' : 'VodafoneRg',
  Roboto: 'Roboto',
  VodafoneLt: Platform.OS === 'ios' ? 'Vodafone Lt' : 'VodafoneLt',

  bold: {
    fontFamily: Platform.OS === 'ios' ? 'Vodafone Rg' : 'Vodafone Rg Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  /**
   * Use when you want to unbold a style what uses bold. since type.bold
   * changes two properties, and undoing these changes is not straight forward
   */
  normal: {
    fontFamily: Platform.OS === 'ios' ? 'Vodafone Rg' : 'VodafoneRg',
    fontWeight: 'normal',
  },
};

export default {
  Colors,
  FontSize,
  FontWeight,
  MetricsSizes,
};
