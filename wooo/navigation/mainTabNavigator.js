 //components
import React from 'react'
import HomeScreen from "../src/HomeScreen"
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

 export function WishListScreen(){
     return (
         <View>
             <Text>WishList Screen</Text>
         </View>
     )
 }
 export function CartScreen(){
    return (
        <View>
            <Text>Cart Screen</Text>
        </View>
    )
}
export function ProfileScreen(){
    return (
        <View>
            <Text>Profile Screen</Text>
        </View>
    )
}


 //stacks
 export const HomeStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
  });


 //tab navigator

export const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    WishList: WishListScreen,
    Cart: CartScreen,
    Profile: ProfileScreen
  });
  


 //export AppContainer
 export default createAppContainer(TabNavigator);