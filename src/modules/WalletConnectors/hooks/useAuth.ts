import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { useToast } from '@chakra-ui/react'

import { connectorLocalStorageKey } from '../constants'
import { ConnectorNames } from '../types'

import { connectorsByName } from '@/lib/web3React'
import { setupNetwork } from '@/lib/wallet'

const useAuth = () => {
  // const dispatch = useAppDispatch()
  const { activate, deactivate } = useWeb3React()
  const toast = useToast()

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]

    if (connector) {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork()

          if (hasSetup) {
            activate(connector)
          }
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey)
          if (
            error instanceof NoEthereumProviderError ||
            error instanceof NoBscProviderError
          ) {
            toast({
              title: 'Provider Error',
              description: 'No provider was found.',
              status: 'error',
              isClosable: true,
            })
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector
              walletConnector.walletConnectProvider = null
            }

            toast({
              title: 'Authorization Error',
              description: 'Please authorize to access your account.',
              status: 'error',
              isClosable: true,
            })
          } else {
            toast({
              title: error.name,
              description: error.message,
              status: 'error',
              isClosable: true,
            })
          }
        }
      })
    } else {
      toast({
        title: `Can't find connector`,
        description: `The connector config is wrong`,
        status: 'error',
        isClosable: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logout = useCallback(() => {
    // dispatch(profileClear())
    console.log('logout')
    deactivate()
  }, [deactivate])

  return { login, logout }
}

export default useAuth
