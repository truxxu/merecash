import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

import {colors, fonts, padding} from '../styles';

const Button = ({title = 'test', action}) => {
  return (
    <Pressable onPress={action} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export {Button};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: padding.sm,
  },
  text: {
    color: colors.secondary,
    textAlign: 'center',
    fontSize: fonts.md,
  },
});
