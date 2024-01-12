import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ColorKeys, FontColors } from '../../../@types/theme';
import * as Variables from '../../../constants/theme';
import { usePallette } from '../../../hooks';
import Typography from '../Typography';

type ButtonProps = {
  title: string;
  color?: ColorKeys;
  textColor?: FontColors;
  disabled: boolean;
  fullWidth?: boolean;
  onButtonPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  color = 'primary',
  textColor = 'textLight',
  disabled,
  fullWidth,
  onButtonPress,
}) => {
  const pallette = usePallette(Variables);
  return (
    <View style={[styles.buttonContainer, fullWidth ? styles.fullWidth : undefined]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.6}
        style={[styles.button, pallette[color]]}
        onPress={onButtonPress}>
        <Typography variant={'body'} align={'center'} color={textColor}>
          {title}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    borderRadius: 4,
    padding: 16,
  },
});

export default Button;
