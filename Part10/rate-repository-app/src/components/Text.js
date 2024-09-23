import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  },
});

const Text = ({ children, style, color, fontWeight, fontSize, ...props }) => {
  const textStyle = [
    styles.text,
    fontWeight === 'bold' && styles.bold,
    fontSize === 'subheading' && styles.subheading,
    color === 'textSecondary' && styles.textSecondary,
    style,
  ];

  return (
    <NativeText style={textStyle} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;
