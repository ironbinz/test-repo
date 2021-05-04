import * as React from 'react'
import { Box } from '@chakra-ui/react'

import useEagerConnect from '@/modules/WalletConnectors/hooks/useEagerConnect'
import { Header } from './Header'

export const MainLayout: React.FC = ({ children }) => {
  useEagerConnect()

  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}
