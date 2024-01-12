import React from 'react';

import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer } from '@react-navigation/native';

import { authConfig } from '../config/global';
import useAuthController from '../hooks/controllers/App/useAuthController';
import { navigationRef } from '../utils/navigation';

import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

function RootNavigator() {
  const { authData } = useAuthController(authConfig);
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      {authData.hasLoggedInOnce ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
