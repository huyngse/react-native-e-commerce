import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClickLike = useCallback(() => {
    setIsLiked(prev => !prev);
  }, []);
  return (
    <View className="flex-1 relative">
      <Image
        source={require('../assets/product-1.png')}
        className="h-[256px] w-full rounded-lg"
      />
      <Text className="text-lg mt-1">Jacket Jeans</Text>
      <Text className="text-lg text-gray-500">$45.9</Text>
      <TouchableOpacity
        className="absolute right-3 top-3 bg-white p-2 rounded-full"
        onPress={handleClickLike}>
          {
            isLiked ? (
              <Icon name="heart" size={20} color="#E86D6D" />
            ) : (
              <Icon name="heart-o" size={20} color="#E86D6D" />
            )
          }
      
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
