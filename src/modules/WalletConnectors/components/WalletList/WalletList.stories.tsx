import { Box } from '@chakra-ui/react'

import { WalletList } from './WalletList'

export const Overview = () => {
  return (
    <Box sx={{ maxW: '360px' }}>
      <WalletList
        onSelect={(connector) => console.log('connector', connector)}
      />
    </Box>
  )
}

export default {
  title: 'Wallet List',
}
