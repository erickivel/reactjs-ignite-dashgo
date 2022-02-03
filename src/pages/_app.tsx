import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { makeServer } from '../services/mirage';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawerProvider>
  );
}

export default MyApp
