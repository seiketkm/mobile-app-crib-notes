import '@testing-library/jest-native/extend-expect';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {TermsAgreementOverlayComponent} from './TermsAgreementOverlayComponent';

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Snackbar.Component />
    </SafeAreaProvider>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('TermsAgreementOverlayComponent', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    render(
      <TermsAgreementOverlayComponent
        visible
        close={() => {}}
        termsOfService={{version: '1.0.0', url: AppConfig.termsUrl}}
        contentViewTestID="TermsAgreementOverlay"
      />,
      {
        wrapper: Wrapper,
      },
    );
    expect(screen.queryByTestId('TermsAgreementOverlay')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
