import { Box } from '@chakra-ui/react'

import { Header } from '@/modules/Header'
import { WalletConnectors } from '@/modules/WalletConnectors'

const ChartView = () => {
  return (
    <Box>
      <Header />
      <Box
        data-testid="main"
        sx={{ display: 'grid', gridTemplateColumns: '470px 1fr 470px' }}
      >
        <Box data-testid="leftSidebar" sx={{}}>
          leftSidebar
        </Box>
        <Box>
          <Box>Chart</Box>
          <Box>Coin Info</Box>
        </Box>
        <Box data-testid="rightSidebar">
          <Box data-testid="tradingList">
            <Box>
              <WalletConnectors />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChartView
