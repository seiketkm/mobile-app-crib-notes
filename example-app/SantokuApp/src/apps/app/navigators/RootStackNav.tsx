import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {sendErrorLog} from 'bases/logging/sendErrorLog';
import {m} from 'bases/message/Message';
import {useIsLoggedIn} from 'features/account/client-states/useIsLoggedIn';
import React, {useEffect, useMemo} from 'react';
import {DevSettings} from 'react-native';

import {LoginScreen} from '../screens/account/LoginScreen';
import {ProfileRegistrationScreen} from '../screens/account/ProfileRegistrationScreen';
import {hideSplashScreen} from '../services/hideSplashScreen';
import {AppInitialData} from '../types/AppInitialData';
import {useAuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';
import {useDefaultScreenOptions} from './useDefaultScreenOptions';

const nav = createNativeStackNavigator<RootStackParamList>();

const invisibleHeaderOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const getInitialRouteName = (isLoggedIn?: boolean) => {
  if (isLoggedIn) {
    return 'AuthenticatedStackNav';
  }
  return 'Login';
};

const useRootStackNavigator = (initialData: AppInitialData) => {
  const [isLoggedIn] = useIsLoggedIn();
  const initialRouteName = useMemo(() => getInitialRouteName(isLoggedIn), [isLoggedIn]);
  const authenticatedStackNav = useAuthenticatedStackNav(initialData);
  const defaultScreenOptions = useDefaultScreenOptions();

  useEffect(() => {
    hideSplashScreen().catch(e => {
      sendErrorLog(e);
    });
  }, []);

  return (
    <nav.Navigator screenOptions={defaultScreenOptions} initialRouteName={initialRouteName}>
      {isLoggedIn ? (
        <>
          <nav.Group screenOptions={invisibleHeaderOptions}>
            <nav.Screen
              name="AuthenticatedStackNav"
              component={authenticatedStackNav}
              options={{
                headerShown: false,
              }}
            />
          </nav.Group>
          <nav.Group screenOptions={invisibleHeaderOptions}>
            <nav.Screen
              {...DemoStackNav}
              name="DemoStackNav"
              component={DemoStackNav}
              options={{
                presentation: 'formSheet' as const,
              }}
            />
          </nav.Group>
        </>
      ) : (
        <>
          <nav.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: m('ログイン'),
              animation: 'fade',
            }}
          />
          <nav.Screen
            name="ProfileRegistration"
            component={ProfileRegistrationScreen}
            options={{
              title: m('プロフィール登録'),
              animation: 'slide_from_bottom',
            }}
          />
        </>
      )}
    </nav.Navigator>
  );
};

export const RootStackNav: React.FC<{initialData: AppInitialData}> = ({initialData}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Go to Demo', () => {
        navigation.navigate('DemoStackNav', {screen: 'DemoMenu'});
      });
    }
  }, [navigation]);

  return useRootStackNavigator(initialData);
};