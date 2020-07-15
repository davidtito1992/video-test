import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';

export const NavigationMenu = ({ navigationProps }) => {
  const toggleDrawer = () => navigationProps.toggleDrawer();

  return (
    <TouchableOpacity onPress={() => toggleDrawer()} style={{ marginLeft: 16 }}>
      <Icon name="menu" />
    </TouchableOpacity>
  );
};

export const CustomDrawer = props => {
  const { navigation } = props;
  const mainLists = useSelector(state => state?.home?.mainLists);
  const renderItems = () =>
    mainLists?.map(item => (
      <DrawerItem
        key={item._id}
        label={item?.name}
        onPress={() =>
          navigation.navigate('MainList', {
            id: item?._id,
            name: `${item?.name}`,
          })
        }
      />
    ));

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexGrow: 2, marginTop: 16 }}>
        <DrawerItem
          label="INICIO"
          onPress={() => navigation.navigate('Home', { name: 'Home' })}
        />
        {renderItems()}
      </View>
    </DrawerContentScrollView>
  );
};
