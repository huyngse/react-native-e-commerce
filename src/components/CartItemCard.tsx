import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CartItem} from '../types/cart';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {formatToUSD} from '../utils/currency';
import useCartStore from '../store/cart-store';

const CartItemCard = ({item}: {item: CartItem}) => {
  const removeItem = useCartStore(state => state.removeItem);
  const handleRemoveItem = () => {
    removeItem(item.product.id, item.selectedColor, item.selectedSize);
  };
  return (
    <View className="flex-row gap-3">
      <Image
        className="h-28 w-1/4 rounded-lg"
        source={{uri: `http://localhost:8081/${item.product.image}`}}
      />
      <View className="flex-1 px-3 gap-2">
        <View className="flex-row justify-between">
          <Text className="text-xl font-semibold">{item.product.title}</Text>
          <TouchableOpacity onPress={handleRemoveItem}>
            <Icon name="trash-alt" color="#E86D6D" size={20} />
          </TouchableOpacity>
        </View>
        <Text className="text-gray-600">{formatToUSD(item.product.price)}</Text>
        <View className="flex-row gap-3">
          <View
            className="size-10 rounded-full"
            style={{backgroundColor: item.selectedColor}}></View>
          <View className="bg-white rounded-full px-2 aspect-square justify-center items-center">
            <Text className={`text-lg font-semibold text-gray-600`}>
              {item.selectedSize}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
