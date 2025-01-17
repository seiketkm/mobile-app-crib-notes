import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {setStatusBarStyle} from 'expo-status-bar';
import {ProfileDetailPage} from 'features/account/pages/ProfileDetailPage';
import React, {useCallback, useEffect} from 'react';

import {RootStackParamList, AccountStackParamList} from '../../navigators/types';

export const ProfileDetailScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<AccountStackParamList, 'ProfileDetail'>,
    NativeStackScreenProps<RootStackParamList, 'DemoStackNav'>
  >
> = ({navigation}) => {
  const navigateToDemo = useCallback(() => navigation.navigate('DemoStackNav', {screen: 'DemoMenu'}), [navigation]);
  useEffect(() => {
    return navigation.addListener('focus', () => {
      setStatusBarStyle('dark');
    });
  }, [navigation]);
  return <ProfileDetailPage navigateToDemo={navigateToDemo} />;
};
