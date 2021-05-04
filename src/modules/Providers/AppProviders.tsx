import * as React from 'react'
import { Web3ReactProvider } from '@web3-react/core'

import { getLibrary } from '@/lib/web3React'

export const AppProviders: React.FC = (props) => {
  const { children } = props

  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}
