import { Grid, Container } from '@chakra-ui/react'

import { MainLayout } from '@/modules/Layouts/MainLayout'
import { HowItWorkSection } from './HowItWorkSection'
import { WonResultsSection } from './WonResultsSection'
import { BuyTicketSection } from './BuyTicketSection'
import { PrizePotsSection } from './PrizePotsSection'

const LotteryMainPage = () => {
  return (
    <MainLayout>
      <Container>
        <Grid gap="6" sx={{ py: '6' }}>
          <Grid gridTemplateColumns="repeat(2, 1fr)" gap="6">
            <PrizePotsSection />
            <BuyTicketSection />
          </Grid>
          <WonResultsSection />
          <HowItWorkSection />
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default LotteryMainPage
