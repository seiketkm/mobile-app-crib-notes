import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackNavigationOptions, NativeStackScreenProps} from '@react-navigation/native-stack';
import {setStatusBarStyle} from 'expo-status-bar';
import {HomePage} from 'features/qa-home/pages/HomePage';
import React, {useCallback, useEffect} from 'react';

import {AuthenticatedStackParamList, HomeStackParamList} from '../../navigators/types';

export const HomeScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, 'Home'>,
    NativeStackScreenProps<AuthenticatedStackParamList, 'QuestionAndEventStackNav'>
  >
> = ({navigation}) => {
  const navigateToQuestionDetail = useCallback(
    (questionId: string) => navigation.navigate('QuestionDetail', {questionId}),
    [navigation],
  );

  const navigateToQuestionAndEventPost = useCallback(
    () => navigation.navigate('QuestionAndEventStackNav', {screen: 'QuestionAndEventPost'}),
    [navigation],
  );

  const setNavigationOptions = useCallback(
    (options: NativeStackNavigationOptions) => navigation.setOptions(options),
    [navigation],
  );

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setStatusBarStyle('light');
    });
  }, [navigation]);

  return (
    <HomePage
      navigateToQuestionAndEventPost={navigateToQuestionAndEventPost}
      navigateToQuestionDetail={navigateToQuestionDetail}
      setHeader={setNavigationOptions}
    />
  );
};
