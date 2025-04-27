import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Product} from '../types/product';
import data from '../data/data.json';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../App';
import {formatToUSD} from '../utils/currency';

const jsonData: Product[] = data.products;
const getProductById = (id: number): Product | undefined => {
  return jsonData.find(x => x.id == id);
};

type Props = NativeStackScreenProps<HomeStackParamList, 'ProductDetail'>;
const sizes = ['S', 'M', 'L', 'XL'];
const colors = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];

const ProductDetailScreen = ({navigation, route}: Props) => {
  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<string>();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const productId = route.params.productId;
    const p = getProductById(parseInt(productId));
    if (p == undefined) {
      navigation.goBack();
    } else {
      setProduct(p);
    }
  }, []);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="font-semibold">Product not found</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} className="flex-1">
      <Header />
      <ScrollView className="flex-1">
        <Image
          source={{uri: `http://localhost:8081/${product.image}`}}
          className="w-100 h-[400px]"
        />
        <View className="px-5 pb-5">
          <View className="flex-row justify-between py-3">
            <Text className="text-2xl text-gray-600 font-semibold">
              {product.title}
            </Text>
            <Text className="text-xl text-gray-600 font-bold">
              {formatToUSD(product.price)}
            </Text>
          </View>
          {/* Select Size */}
          <View>
            <Text className="text-xl text-gray-600 font-semibold">Size</Text>
            <View className="flex-row gap-3 mt-2">
              {sizes.map(size => (
                <TouchableOpacity
                  className="bg-white rounded-full p-2 aspect-square justify-center items-center"
                  key={size}
                  onPress={() => {
                    setSelectedSize(size);
                  }}>
                  <Text
                    className={`text-lg font-semibold ${
                      selectedSize == size ? 'text-[#E55B5B]' : 'text-gray-600'
                    }`}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* Select Color */}
          <View className="mt-2">
            <Text className="text-xl text-gray-600 font-semibold">Color</Text>
            <ScrollView
              className="mt-2"
              horizontal
              contentContainerStyle={{gap: 5}}>
              {colors.map(color => (
                <TouchableOpacity
                  className={`bg-white rounded-full p-1 aspect-square justify-center items-center`}
                  key={color}
                  onPress={() => {
                    setSelectedColor(color);
                  }}
                  style={{
                    borderWidth: 2,
                    borderColor: selectedColor == color ? color : '#FFF',
                  }}>
                  <View
                    className="size-10 rounded-full"
                    style={{backgroundColor: color}}></View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity className='rounded-xl bg-[#E55B5B] p-4 w-full items-center justify-center mt-5'>
            <Text className='text-white font-semibold'>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailScreen;
