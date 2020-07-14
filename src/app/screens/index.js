import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator();

const Screens = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen options={options} name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default Screens;
