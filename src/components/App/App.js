import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Tab = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View>
        <Text>Home</Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
