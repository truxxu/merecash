import React from 'react';
import {StyleSheet, View, ActivityIndicator, SafeAreaView} from 'react-native';

import {colors} from '../styles';

const ScreenTemplate = ({children, center, isLoading}) => {
  return (
    <>
      {isLoading && (
        <View style={styles.spinner}>
          <ActivityIndicator size={80} color={colors.primary} />
        </View>
      )}
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, center && styles.center]}>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

export {ScreenTemplate};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.secondary,
  },
  container: {
    backgroundColor: colors.secondary,
    padding: 15,
    height: '100%',
    zIndex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.35)',
    zIndex: 9,
  },
});
