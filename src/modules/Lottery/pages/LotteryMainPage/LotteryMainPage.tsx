import { Grid, Container } from '@chakra-ui/react'
import { Fragment } from 'react'
import { NextSeo } from 'next-seo'

import { MainLayout } from '@/modules/Layouts/MainLayout'
import { HowItWorkSection } from './HowItWorkSection'
import { WonResultsSection } from './WonResultsSection'
import { BuyTicketSection } from './BuyTicketSection'
import { PrizePotsSection } from './PrizePotsSection'
import { CommingSoonSection } from './CommingSoonSection'

NextSeo
const LotteryMainPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="Lottery"
        description="Decentralized Token Launch Platform
        MMP will bring very high yield investment for the investors and the new selected high growth potential tokens executively for our holders, Airdrop, and many more features"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <MainLayout>
        <Container>
          <Grid gap="6" sx={{ py: '6' }}>
            <CommingSoonSection />
            <WonResultsSection />
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap="6">
              <PrizePotsSection />
              <BuyTicketSection />
            </Grid>

            <HowItWorkSection />
          </Grid>
        </Container>
      </MainLayout>
    </Fragment>
  )
}

export default LotteryMainPage
