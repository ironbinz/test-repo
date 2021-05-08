import { Grid, Container } from '@chakra-ui/react'
import { Fragment } from 'react'
import { NextSeo } from 'next-seo'

import { MainLayout } from '@/modules/Layouts/MainLayout'
import { HowItWorkSection } from './HowItWorkSection'
import { WonResultsSection } from './WonResultsSection'
import { BuyTicketSection } from './BuyTicketSection'
import { PrizePotsSection } from './PrizePotsSection'
import { CommingSoonSection } from './CommingSoonSection'
import { Footer } from './Footer'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL
const description = `Decentralized Token Launch Platform MMP will bring very high yield investment for the investors and the new selected high growth potential tokens executively for our holders, Airdrop, and many more features`

const LotteryMainPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="Lottery"
        description={description}
        openGraph={{
          url: APP_URL,
          title: 'Lottery | Moon Maker Protocol',
          description: description,
          images: [{ url: `${APP_URL}/img/mmp-lotttery-fb-og` }],
          site_name: 'Moon Maker Protocol',
        }}
        twitter={{
          handle: '@moonmakerpro',
          site: '@moonmakerpro',
          cardType: `${APP_URL}/img/mmp-lotttery-fb-og`,
        }}
      />
      <MainLayout>
        <Container>
          <Grid gap="6" sx={{ py: '6' }}>
            <CommingSoonSection />
            <WonResultsSection />
            <Grid
              gridTemplateColumns={{
                base: '1fr',
                lg: 'repeat(2, 1fr)',
              }}
              gap="6"
            >
              <PrizePotsSection />
              <BuyTicketSection />
            </Grid>

            <HowItWorkSection />
            <Footer />
          </Grid>
        </Container>
      </MainLayout>
    </Fragment>
  )
}

export default LotteryMainPage
