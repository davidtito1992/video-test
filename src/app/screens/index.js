import * as React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomDrawer, NavigationMenu } from '../components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
import Home from './Home';
import MainList from './MainList';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderTitle = () => {
  const route = useRoute();
  return (
    <Text
      style={{
        marginLeft: 32,
      }}
      numberOfLines={1}>
      {route.params?.name}
    </Text>
  );
};

const MainStack = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: props => (
          <NavigationMenu navigationProps={navigation} {...props} />
        ),
        headerTitle: props => <HeaderTitle {...route} {...props} />,
        headerStyle: {
          height: 40,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MainList" component={MainList} />
    </Stack.Navigator>
  );
};

const Screens = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Left Drawer" component={MainStack} />
    </Drawer.Navigator>
  );
};

export default Screens;
