import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {setStatusBarStyle} from 'expo-status-bar';
import {DemoMenuPage} from 'features/demo-menu/pages/DemoMenuPage';
import React, {useMemo, useEffect} from 'react';
import {Platform} from 'react-native';

type ScreenList = {
  title: string;
  to: Exclude<
    keyof DemoStackParamList,
    | 'License'
    | 'EditTodoDemo'
    | 'SearchBarTodoDemo'
    | 'SearchFormTodoDemo'
    | 'GetAccountsMeDemo'
    | 'DisableErrorHandlerDemo'
    | 'DependentQueryDemo3'
    | 'DependentQueryDemo2'
    | 'DependentQueryDemo1'
    | 'DisabledQueryDemo'
    | 'CreateTodoDemo'
    | 'ListTodoDemo'
    | 'ErrorInEventHandler'
    | 'ErrorInNativeModule'
    | 'ErrorInReactComponent'
    | 'ErrorInUseEffectAsyncProcess'
    | 'ErrorInUseEffect'
    | 'ErrorInUseEffectSyncProcess'
  >;
};

const demoScreenList: ScreenList[] = [
  {
    title: 'Application Information',
    to: 'AppInfo',
  },
  {
    title: 'Track AppState',
    to: 'AppState',
  },
  {
    title: 'GlobalErrorHandling',
    to: 'ErrorCase',
  },
  {
    title: 'React Native Instructions',
    to: 'Instructions',
  },
  {
    title: 'Configuration',
    to: 'Config',
  },
  {
    title: 'Log',
    to: 'Log',
  },
  {
    title: 'Message',
    to: 'Message',
  },
  {
    title: 'Button',
    to: 'Button',
  },
  {
    title: 'Snackbar',
    to: 'Snackbar',
  },
  {
    title: 'Local Authentication',
    to: 'LocalAuthentication',
  },
  {
    title: 'Authentication',
    to: 'Authentication',
  },
  {
    title: 'HttpApi',
    to: 'HttpApi',
  },
  {
    title: 'Navigation',
    to: 'Navigation',
  },
  {
    title: 'PushNotification',
    to: 'PushNotificationSender',
  },
  {
    title: 'Cache',
    to: 'Cache',
  },
  {
    title: 'TanStack Query',
    to: 'ReactQueryDemo',
  },
  {
    title: 'Picker',
    to: 'Picker',
  },
  {
    title: 'QRCode',
    to: 'QRCode',
  },
  {
    title: 'Barcode',
    to: 'Barcode',
  },
  {
    title: 'Map',
    to: 'Map',
  },
  {
    title: 'DeepLink',
    to: 'DeepLink',
  },
  {
    title: 'Acknowledgements',
    to: 'Acknowledgements',
  },
];

const addOnPressHandlerToItems = (navigation: NavigationProp<DemoStackParamList>) => (demo: ScreenList) => {
  return {
    ...demo,
    onPress: () => navigation.navigate(demo.to),
  };
};

export const DemoMenuScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'DemoMenu'>> = ({navigation}) => {
  const demoItems = useMemo(() => demoScreenList.map(addOnPressHandlerToItems(navigation)), [navigation]);
  useEffect(() => {
    return navigation.addListener('focus', () => {
      if (Platform.OS === 'ios') {
        setStatusBarStyle('dark');
      }
    });
  }, [navigation]);
  return <DemoMenuPage items={demoItems} />;
};
