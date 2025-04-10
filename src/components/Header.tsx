import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View className="p-3 flex-row justify-between items-center">
      <View className="p-3 bg-white" style={{borderRadius: '50%'}}>
        <Icon name="th" color="#E86D6D" size={16} />
      </View>
      <Image
        source={require('../assets/pfp.jpg')}
        className="size-10 rounded-full"
      />
    </View>
  );
};

export default Header;
