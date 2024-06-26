// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const styles =  {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  global: (props) => ({
    body: {
      fontFamily: 'manrope',
      // color: mode('red', 'whiteAlpha.900')(props),
      bg: mode('#EDF2F4', 'gray.800')(props),
      lineHeight: 'base',
    },
   }),
   colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,

  //   colors: {
  //     error: 'red.500',
  //     success: 'green.500',
  //     primary: {
  //       default: 'red.500',
  //       _dark: 'red.400',
  //     },
  //     secondary: {
  //       default: 'red.800',
  //       _dark: 'red.700',
  //     },
  // },
}

// 3. extend the theme
const theme = extendTheme({styles});

export default theme