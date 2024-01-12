import React from 'react';

import { DrawerActions } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, IconButton } from '@vrs-mobile-framework-ui/foundation';

import { selectUserInfo } from '../redux/app';
import { useSelector } from '../redux/store';
import { HomeScreen, CreateTodoScreen, EditTodoScreen, KitchenSinkScreen } from '../screens';
import { navigationRef } from '../utils/navigation';

export type StackParamsList = {
  Home: undefined;
  Create: undefined;
  Edit: {
    id: string;
  };
  Kitchen: undefined;
};

export type StackScreenProps<T extends keyof StackParamsList> = NativeStackScreenProps<
  StackParamsList,
  T
>;

const Stack = createNativeStackNavigator<StackParamsList>();
const MenuIcon = () => (
  <Box mr={'xs'}>
    <IconButton
      name={'menu'}
      onIconPress={() => navigationRef.dispatch(DrawerActions.openDrawer())}
    />
  </Box>
);

function AppNavigator() {
  const userInfo = useSelector(selectUserInfo);
  const headerTitle = `Welcome back, ${userInfo?.given_name}`;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Kitchen'
        component={KitchenSinkScreen}
        options={{
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle,
          headerRight: MenuIcon,
        }}
      />
      <Stack.Screen
        name='Edit'
        component={EditTodoScreen}
        options={{
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name='Create'
        component={CreateTodoScreen}
        options={{
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
