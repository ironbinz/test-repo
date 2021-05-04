import { WalletList } from '../components/WalletList/WalletList'

export const WalletConnectors = () => {
  return <WalletList onSelect={(connector) => console.log(connector)} />
}
