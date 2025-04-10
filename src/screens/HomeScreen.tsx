import {View, Text, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} className="px-4 flex-1">
      <Header />
      <View className="p-3">
        <Text className="text-3xl mt-3">Match Your Style</Text>
        <View className="bg-white p-4 mt-3 rounded-xl flex-row items-center gap-2">
          <Icon name="search" size={20} color={'#CCC'} />
          <TextInput className='flex-1 py-0 text-black' placeholder='Search...' placeholderTextColor={"#CCC"}/>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
