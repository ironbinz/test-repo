import { Box } from '@chakra-ui/react'

import { MainLayout } from '@/modules/Layouts/MainLayout'

const ChartView = () => {
  return (
    <MainLayout>
      <Box
        data-testid="main"
        sx={{
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: '470px 1fr 470px' },
        }}
      >
        <Box data-testid="leftSidebar" sx={{}}>
          leftSidebar
        </Box>
        <Box>
          <Box>Chart</Box>
          <Box>Coin Info</Box>
        </Box>
        <Box data-testid="rightSidebar">
          <Box data-testid="tradingList">sidebar</Box>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default ChartView
