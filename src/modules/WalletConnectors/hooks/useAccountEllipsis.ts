import { useWeb3React } from '@web3-react/core'

export const useAccountEllipsis = () => {
  const { account } = useWeb3React()

  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null

  return accountEllipsis
}
