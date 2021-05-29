import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Strings } from '../../src/language/strings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screens.Home} />
    </Stack.Navigator>
  );
};

const SecondStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Screens.Profile} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'RootStack') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'SecondStack') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="RootStack"
        component={RootStack}
        options={{ title: Strings.Home.title }}
      />
      <Tab.Screen
        name="SecondStack"
        component={SecondStack}
        options={{ title: Strings.Profile.title }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
