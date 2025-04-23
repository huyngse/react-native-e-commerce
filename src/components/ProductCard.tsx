import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Product} from '../types/product';
import {formatToUSD} from '../utils/currency';

const ProductCard = ({item}: {item: Product}) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClickLike = useCallback(() => {
    setIsLiked(prev => !prev);
  }, []);
  return (
    <View className="flex-1 relative">
      <Image
        source={{uri: `http://localhost:8081/${item.image}`}}
        className="h-[256px] w-full rounded-lg"
      />
      <Text className="text-lg mt-1">{item.title}</Text>
      <Text className="text-lg text-gray-500">{formatToUSD(item.price)}</Text>
      <TouchableOpacity
        className="absolute right-3 top-3 bg-white p-2 rounded-full"
        onPress={handleClickLike}>
        {isLiked ? (
          <Icon name="heart" size={20} color="#E86D6D" />
        ) : (
          <Icon name="heart-o" size={20} color="#E86D6D" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
