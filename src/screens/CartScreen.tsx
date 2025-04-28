import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartItemCard from '../components/CartItemCard';
import {formatToUSD} from '../utils/currency';
import useCartStore from '../store/cart-store';

const CartScreen = () => {
  const {items: cartItems} = useCartStore(state => state);
  const totalPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + item.product.price * item.quantity;
  }, 0);

  if (cartItems.length == 0) {
    return (
      <LinearGradient colors={['#FDF0F3', '#FFFBFC']} className="flex-1">
        <Header title="My Cart" canGoBack />
        <View className="items-center justify-center flex-1">
          <Text className="text-2xl text-gray-500">Empty Cart</Text>
        </View>
      </LinearGradient>
    );
  }
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} className="flex-1">
      <Header title="My Cart" canGoBack />
      <FlatList
        data={cartItems}
        keyExtractor={item =>
          item.product.id + '-' + item.selectedColor + '-' + item.selectedSize
        }
        renderItem={item => <CartItemCard item={item.item} />}
        contentContainerStyle={{gap: 20, padding: 20}}
        ListFooterComponent={() => (
          <View className="gap-3">
            <View className="flex-row justify-between">
              <Text className="text-lg text-gray-600">Total:</Text>
              <Text className="text-lg text-gray-600 font-semibold">
                {formatToUSD(totalPrice)}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-lg text-gray-600">Shipping:</Text>
              <Text className="text-lg text-gray-600 font-semibold">
                {formatToUSD(0)}
              </Text>
            </View>
            <View className="border-b border-gray-400"></View>
            <View className="flex-row justify-between">
              <Text className="text-lg text-gray-600">Grand Total:</Text>
              <Text className="text-lg text-gray-800 font-semibold">
                {formatToUSD(totalPrice)}
              </Text>
            </View>
            <TouchableOpacity className="rounded-xl bg-[#E55B5B] p-4 w-full items-center justify-center mt-5">
              <Text className="text-white font-semibold">Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </LinearGradient>
  );
};

export default CartScreen;
