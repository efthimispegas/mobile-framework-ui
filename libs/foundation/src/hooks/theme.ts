import { StyleSheet } from 'react-native';

import { ThemeVariables, Gutters, Fonts, Pallette } from '../../src/@types/theme';

/**
 * A hook that receives a theme's variables (such as FontSizes, MetricSizes etc.) and returns gutter styles
 * @param variables theme variables to calculate the theme from
 * @returns StyleSheet with gutter styles
 */
export const useGutters = ({ MetricsSizes }: ThemeVariables): Gutters => {
  return StyleSheet.create(
    Object.entries(MetricsSizes).reduce(
      (acc, [key, value]) => ({
        ...acc,
        /* Margins */
        [`${key}m`]: {
          margin: value,
        },
        [`${key}mb`]: {
          marginBottom: value,
        },
        [`${key}mt`]: {
          marginTop: value,
        },
        [`${key}mr`]: {
          marginRight: value,
        },
        [`${key}ml`]: {
          marginLeft: value,
        },
        [`${key}mv`]: {
          marginVertical: value,
        },
        [`${key}mh`]: {
          marginHorizontal: value,
        },
        /* Paddings */
        [`${key}p`]: {
          padding: value,
        },
        [`${key}pb`]: {
          paddingBottom: value,
        },
        [`${key}pt`]: {
          paddingTop: value,
        },
        [`${key}pr`]: {
          paddingRight: value,
        },
        [`${key}pl`]: {
          paddingLeft: value,
        },
        [`${key}pv`]: {
          paddingVertical: value,
        },
        [`${key}ph`]: {
          paddingHorizontal: value,
        },
      }),
      {},
    ) as Gutters,
  );
};

/**
 * A hook that receives a theme's variables (such as FontSizes, MetricSizes etc.) and returns font styles
 * @param variables theme variables to calculate the theme from
 * @returns StyleSheet with font styles
 */
export const useFonts = ({ FontSize, FontWeight, Colors }: ThemeVariables): Partial<Fonts> => {
  return StyleSheet.create({
    /* Font size - Font weight */
    h1: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.h1,
    },
    h2: {
      fontWeight: 'bold',
      fontSize: FontSize.h2,
    },
    h3: {
      fontFamily: FontWeight.emphasis,
      fontSize: FontSize.h3,
    },
    h4: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.h4,
    },
    h5: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.h5,
    },
    h6: {
      fontFamily: FontWeight.emphasis,
      fontSize: FontSize.h6,
    },
    body: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.body,
    },
    bodySmall: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.bodySmall,
    },
    input: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.input,
    },
    tiny: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.tiny,
    },
    small: {
      fontFamily: FontWeight.base,
      fontSize: FontSize.small,
    },
    caption: {
      fontSize: FontSize.caption,
      fontFamily: FontWeight.base,
    },
    /* Text alignment */
    center: {
      textAlign: 'center',
    },
    justify: {
      textAlign: 'justify',
    },
    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
    },
    /* Colors */
    primary: {
      color: Colors.primary,
    },
    secondary: {
      color: Colors.secondary,
    },
    textLight: {
      color: Colors.textLight,
    },
    textDark: {
      color: Colors.textDark,
    },
    textGray: {
      color: Colors.textGray,
    },
    error: {
      color: Colors.error,
    },
    /** Font weight */
    bold: {
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    black: {
      fontStyle: 'normal',
      fontWeight: '800',
    },
  });
};

/**
 * A hook that receives a theme's variables (such as FontSizes, MetricSizes etc.) and returns font styles
 * @param variables theme variables to calculate the theme from
 * @returns StyleSheet with color styles
 */
export const usePallette = ({ Colors }: ThemeVariables): Partial<Pallette> => {
  return StyleSheet.create({
    /* Colors */
    primary: {
      backgroundColor: Colors.primary,
    },
    secondary: {
      backgroundColor: Colors.secondary,
    },
    textLight: {
      backgroundColor: Colors.textLight,
    },
    textDark: {
      backgroundColor: Colors.textDark,
    },
    textGray: {
      backgroundColor: Colors.textGray,
    },
    error: {
      backgroundColor: Colors.error,
    },
  });
};
