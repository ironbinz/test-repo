import { ReactNode } from 'react'
import { Box, Text, HStack, VStack } from '@chakra-ui/react'

export const WonResultsSection = () => {
  return (
    <Box layerStyle="boxSection">
      <Box sx={{ textAlign: 'center', pb: '4' }}>
        <Text textStyle="sectionTitle">Latest Winning Numbers</Text>
      </Box>
      <Box>
        <HStack justify="center" spacing="6">
          <NumberBox>12</NumberBox>
          <NumberBox>4</NumberBox>
          <NumberBox>8</NumberBox>
          <NumberBox>22</NumberBox>
        </HStack>
        <VStack
          spacing="3"
          alignItems="flex-start"
          sx={{ maxW: '420px', mx: 'auto', mt: '6' }}
        >
          <TicketMatchingItem matching="4" number={2} />
          <TicketMatchingItem matching="3" number={5} />
          <TicketMatchingItem matching="2" number={4} />
          <TicketMatchingItem matching="1" number={10} />
        </VStack>
      </Box>
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
        bgColor: 'brand.300',
        color: 'brand.800',
        borderRadius: '24px',
        textAlign: 'center',
        fontSize: '36px',
        p: '12px',
        boxSize: '90px',
        fontWeight: '700',
      }}
    >
      {children}
    </Box>
  )
}
