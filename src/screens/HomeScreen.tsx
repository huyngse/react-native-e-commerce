import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = ['Trending Now', 'All', 'New', "Men's", "Women's"];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categories[0],
  );
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} className="px-4 flex-1">
      <Header />
      <View className="p-3">
        <Text className="text-3xl mt-3">Match Your Style</Text>

        {/* Search bar */}
        <View className="bg-white p-4 my-3 rounded-xl flex-row items-center gap-2">
          <Icon name="search" size={20} color={'#CCC'} />
          <TextInput
            className="flex-1 py-0 text-black"
            placeholder="Search..."
            placeholderTextColor={'#CCC'}
          />
        </View>

        {/* Category filter */}
        <FlatList
          data={categories}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={item => {
            return (
              <Category
                item={item.item}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={{width: 5}} />}
        />
      </View>
    </LinearGradient>
  );
};

const Category = ({
  item,
  selectedCategory,
  setSelectedCategory,
}: {
  item: string;
  selectedCategory?: string;
  setSelectedCategory: (value: string) => void;
}) => {

  const handleOnclick = useCallback(() => {
    setSelectedCategory(item);
  }, []);
  
  return (
    <TouchableOpacity
      className={`${
        selectedCategory == item ? 'bg-[#E86D6D]' : 'bg-gray-300'
      } py-2 px-5 rounded-[20px]`}
      onPress={handleOnclick}>
      <Text
        className={selectedCategory == item ? 'text-white' : 'text-gray-500'}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;
