import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

import theme from './theme'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Global
        styles={css`
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus,
          select:-webkit-autofill,
          select:-webkit-autofill:hover,
          select:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0 30px #fff inset !important;
          }
        `}
      />
      {props.children}
    </ChakraProvider>
  )
}
