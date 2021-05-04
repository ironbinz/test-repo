import { Box } from '@chakra-ui/react'

import { WalletList } from '../components/WalletList/WalletList'
import { connectorLocalStorageKey } from '../constants'
import useAuth from '../hooks/useAuth'

export const WalletConnectors = () => {
  const { login } = useAuth()

  return (
    <Box>
      <WalletList
        onSelect={(connector) => {
          login(connector.connectorId)

          window.localStorage.setItem(
            connectorLocalStorageKey,
            connector.connectorId,
          )
        }}
      />
    </Box>
  )
}
