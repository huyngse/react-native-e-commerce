import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './global.css';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ReorderScreen from './src/screens/ReorderScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import useCartStore from './src/store/cart-store';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

export type HomeStackParamList = {
  Home: undefined;
  ProductDetail: {productId: string};
};
const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();
const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

const App = () => {
  const cartItems = useCartStore(state => state.items);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E5E',
          tabBarStyle: {height: 60, paddingTop: 10},
        }}
        initialRouteName="HomeStack">
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reorder"
          component={ReorderScreen}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <Icon name="reorder" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <View className="relative">
                  <Icon name="shopping-cart" size={size} color={color} />
                  <Text className="-top-1 -right-2 text-xs text-white size-4 justify-center items-center text-center absolute bg-[#E55B5B] rounded-full">
                    {cartItems.length}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
