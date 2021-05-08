import { extendTheme } from '@chakra-ui/react'

import colors from './colors'
import components from './components'
import layerStyles from './layerStyles'
import textStyles from './textStyles'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: {
      body: {
        bgColor: '#1e2430',
        fontFamily:
          'Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      },
      'html,body': {
        color: 'gray.50',
      },
      '&:focus': {
        outline: 'none',
        boxShadow: 'none !important',
      },
    },
  },
  layerStyles,
  textStyles,
  colors,
  components,
})

export default theme
