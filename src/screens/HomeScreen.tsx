import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC',]}
      className="px-4 flex-1">
      <Text className="text-white text-center m-3">Sign in with Facebook</Text>
    </LinearGradient>
  );
};

export default HomeScreen;
