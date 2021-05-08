import { ReactNode } from 'react'
import { Grid, Img, Box, Text, HStack, VStack } from '@chakra-ui/react'

export const WonResultsSection = () => {
  return (
    <Box
      layerStyle="boxSection"
      sx={{ pb: '12', px: { base: '4', sm: '6', md: '12' } }}
    >
      <Box sx={{ textAlign: 'center', py: '6' }}>
        <Text textStyle="sectionTitle">Latest Winning Numbers</Text>
      </Box>
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          lg: '1fr 300px',
          xl: '300px 1fr 300px',
        }}
      >
        <Box sx={{ px: '8', display: { base: 'none', xl: 'block' } }}>
          <Img src="/img/character-2.png" />
        </Box>
        <Box>
          <HStack justify="center" spacing={{ base: '2', sm: '4', md: '6' }}>
            <NumberBox>12</NumberBox>
            <NumberBox>4</NumberBox>
            <NumberBox>8</NumberBox>
            <NumberBox>16</NumberBox>
          </HStack>
          <VStack
            spacing="3"
            alignItems="flex-start"
            sx={{ maxW: '420px', mx: 'auto', mt: '6' }}
          >
            <TicketMatchingItem matching="4" number={2} />
            <TicketMatchingItem matching="3" number={15} />
            <TicketMatchingItem matching="2" number={240} />
          </VStack>
        </Box>
        <Box sx={{ px: '4', display: { base: 'none', lg: 'block' } }}>
          <Img src="/img/character-3.png" />
        </Box>
      </Grid>
    </Box>
  )
}

type TicketMatchingItemProps = {
  number: number
  matching: string
}

const TicketMatchingItem = (props: TicketMatchingItemProps) => {
  const { number = 0, matching } = props

  return (
    <Box
      sx={{
        width: '100%',
        fontSize: '18px',
        bgColor: 'gray.800',
        display: 'flex',
        px: '6',
        py: '2',
        borderRadius: '16px',
        justifyContent: 'space-between',
      }}
    >
      <Box>Tickets matching {matching} numbers</Box>{' '}
      <Box sx={{ display: 'flex' }}>
        <Text sx={{ px: '2', fontWeight: '700', color: 'brand.400' }}>
          {number}
        </Text>
        <Text>Tickets</Text>
      </Box>
    </Box>
  )
}

type NumberBoxProps = {
  children: ReactNode
}

const NumberBox = (props: NumberBoxProps) => {
  const { children } = props

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgColor: 'white',
        color: 'brand.800',
        borderRadius: { base: '20px', sm: '24px' },
        textAlign: 'center',
        p: '12px',
        fontSize: { base: '20px', sm: '24px', lg: '36px' },
        boxSize: { base: '60px', sm: '80px', lg: '90px' },
        fontWeight: '700',
      }}
    >
      {children}
    </Box>
  )
}
