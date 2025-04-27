import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  canGoBack = false,
}: {
  title?: string;
  canGoBack?: boolean;
}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View className="p-3 flex-row justify-between items-center">
      {canGoBack ? (
        <TouchableOpacity
          className="p-3 bg-white rounded-full aspect-square size-10"
          onPress={handleGoBack}>
          <Icon name="angle-left" color="#E86D6D" size={16} />
        </TouchableOpacity>
      ) : (
        <View className="p-3 bg-white" style={{borderRadius: '50%'}}>
          <Icon name="th" color="#E86D6D" size={16} />
        </View>
      )}

      {title && <Text className="text-2xl">{title}</Text>}
      <Image
        source={require('../assets/pfp.jpg')}
        className="size-10 rounded-full"
      />
    </View>
  );
};

export default Header;
