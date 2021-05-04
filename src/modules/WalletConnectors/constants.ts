import Metamask from './components/WalletList/icons/Metamask'
import MathWallet from './components/WalletList/icons/MathWallet'
import TokenPocket from './components/WalletList/icons/TokenPocket'
import TrustWallet from './components/WalletList/icons/TrustWallet'
import WalletConnect from './components/WalletList/icons/WalletConnect'
import BinanceChain from './components/WalletList/icons/BinanceChain'
import SafePalWallet from './components/WalletList/icons/SafePalWallet'

import { ConnectorNames } from './types'

export type ConnectorConfig = {
  title: string
  icon: any
  connectorId: ConnectorNames
}

export const connectorLocalStorageKey = 'connectorId'

export const connectors: ConnectorConfig[] = [
  {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'MathWallet',
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'TokenPocket',
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'Binance Chain Wallet',
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
  {
    title: 'SafePal Wallet',
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
  },
]
