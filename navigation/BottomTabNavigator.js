import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Screen2 from '../screens/Screen2';
import Shops from '../BScreens/Shops/Shops';
import Shop from '../BScreens/Shop/Shop';
import Item from '../BScreens/Item/Item';
import Screen3 from '../screens/Screen3';
import Colors from "../constants/Colors";
import Account from "../BScreens/Account/Account"
import Home from '../BScreens/Home/Home';
import { Image, Text, View } from 'react-native';
import { Discount, DiscountOff, ShopingCart, Ic_nounshoppingcart, Ic_categorybar, Ic_categorybaryellow, Ic_shopbar, Ic_shopbaryellow, Ic_cartbar, Ic_cartbaryellow, Ic_profilebaryellow, Ic_profilebar } from '../components/SVG';
import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  const Stack = createStackNavigator();

  function Shoppz() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="shops" component={Shops} options={{ title: "", headerShown: false, headerStyle: { backgroundColor: "#ddd" } }} />
        <Stack.Screen name="shop" component={Shop} options={{ title: "", headerShown: false, headerStyle: { backgroundColor: "#ddd" } }} />
        {/* <Stack.Screen name="item" component={Item} options={{ title: "", headerShown: false, headerStyle: { backgroundColor: "#ddd" } }} /> */}
      </Stack.Navigator>
    )
  }

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeBackgroundColor: Colors.BGray,
        inactiveBackgroundColor: Colors.BGray,
        tabStyle: {
          paddingTop: 10,
          // marginTop:10,
        },
        style: {
          // borderTopWidth: 0,
          height: 100

        }
      }}
    >
      <BottomTab.Screen
        name="Main"
        // component={HomeScreen}
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => { return <View /> },
          tabBarIcon: ({ focused }) => {
            return <View style={{ width: 80, alignItems: "center" }}>
              {/* <Entypo
                name="shop"
                size={24}
                color={focused ? Colors.DYellow : Colors.DGray}
              /> */}
              {
                focused ?
                  <Ic_shopbaryellow /> :
                  <Ic_shopbar />
              }
              <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Colors.DYellow : Colors.DGray }}>Home</Text>
            </View>
          },
        }}
      />
      <BottomTab.Screen
        name="shops_cat"
        component={Shoppz}
        options={{
          tabBarLabel: ({ focused }) => { return <View /> },
          tabBarIcon: ({ focused }) => {
            return <View style={{ width: 80, alignItems: "center" }}>
              {/*  <Feather
                name="grid"
                size={24}
                color={focused ? Colors.DYellow : Colors.DGray}
              /> */}
              {
                focused ?
                  <Ic_categorybaryellow />
                  :
                  <Ic_categorybar />
              }
              <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Colors.DYellow : Colors.DGray }}>Shops</Text>
            </View>
          },
        }}
      />
      <BottomTab.Screen
        name="Sc2"
        component={Screen2}
        options={{
          tabBarLabel: ({ focused }) => { return <View /> },
          tabBarIcon: ({ focused }) => {
            return <View style={{ width: 80, alignItems: "center" }}>
              {/* <MaterialCommunityIcons
                name="gold"
                size={24}
                color={focused ? Colors.DYellow : Colors.DGray}
              /> */}
              {
                focused ?
                  <Discount />
                  :
                  <DiscountOff />
              }
              <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Colors.DYellow : Colors.DGray }}>Deals</Text>
            </View>
          },
        }}
      />
      <BottomTab.Screen
        name="Sc4"
        component={Screen3}
        options={{
          tabBarLabel: ({ focused }) => { return <View /> },
          tabBarIcon: ({ focused }) => {
            return <View style={{ width: 80, alignItems: "center" }}>
              {/* <MaterialCommunityIcons
                name="bitcoin"
                size={24}
                style={{ paddingTop: 5, paddingBottom: 2 }}
                color={focused ? Colors.DYellow : Colors.DGray}
              /> */}
              {
                focused ?
                  <Ic_cartbaryellow /> :
                  <Ic_cartbar />
              }
              <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Colors.DYellow : Colors.DGray }}>My Cart</Text>
            </View>
          },
        }}
      />
      <BottomTab.Screen
        name="Sc5"
        component={Account}
        options={{
          tabBarLabel: ({ focused }) => { return <View /> },
          tabBarIcon: ({ focused }) => {
            return <View style={{ width: 80, alignItems: "center" }}>
              {/* <MaterialCommunityIcons
                name="diamond"
                size={24}
                style={{ paddingTop: 5, paddingBottom: 2 }}
                color={focused ? Colors.DYellow : Colors.DGray}
              /> */}
              {
                focused ?
                  <Ic_profilebaryellow /> :
                  <Ic_profilebar />
              }
              <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Colors.DYellow : Colors.DGray }}>Me</Text>
            </View>
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home Page';
    case 'Sc2':
      return 'Page 2';
    case 'Sc3':
      return 'Page 3';
  }
}