import { extendTheme } from '@chakra-ui/react'

import colors from './colors'
import components from './components'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: '#1e2430',
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
  colors,
  components,
})

export default theme