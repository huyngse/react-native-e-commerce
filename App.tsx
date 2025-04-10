import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './global.css';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ReorderScreen from './src/screens/ReorderScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#E96E5E"
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
            tabBarIcon: ({size, focused, color}) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Account" component={AccountScreen} 
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
