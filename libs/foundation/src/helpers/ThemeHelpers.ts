import darkColors from '../components/themes/modes/dark/colors';
import DarkImages from '../components/themes/modes/dark/images';
import lightColors from '../components/themes/modes/light/colors';
import LightImages from '../components/themes/modes/light/images';

function createTheme(themeName, isDarkMode = false, colors = {}) {
  return {
    name: themeName,
    isDark: isDarkMode,
    colors,
  };
}

const lightTheme = createTheme('light', false, lightColors);
const darkTheme = createTheme('dark', true, darkColors);

function getThemeColors(themeName) {
  switch (themeName) {
    case 'light':
      return lightTheme;

    case 'dark':
      return darkTheme;

    default:
      return lightTheme;
  }
}

function getThemeImages(themeName) {
  switch (themeName) {
    case 'light':
      return LightImages;

    case 'dark':
      return DarkImages;

    default:
      return LightImages;
  }
}

export {
  lightTheme,
  darkTheme,
  getThemeImages,
  DarkImages,
  LightImages,
  getThemeColors,
  createTheme,
};
