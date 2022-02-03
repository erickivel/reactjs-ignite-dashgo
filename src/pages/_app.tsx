import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';

import { QueryClientProvider } from 'react-query';
import { makeServer } from '../services/mirage';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

import { theme } from '../styles/theme';
import { queryClient } from '../services/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp
