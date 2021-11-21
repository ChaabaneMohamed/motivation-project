import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Home';
import ProfileScreen from './Profile';
import RandomScreen from './Random';
import SearchScreen from './Search';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Random" component={RandomScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;