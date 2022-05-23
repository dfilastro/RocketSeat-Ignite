import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#f5f8fa',
      '800': '#47585B',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
});
