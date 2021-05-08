import { Flex, Grid, Box, Text, Img } from '@chakra-ui/react'

export const PrizePotsSection = () => {
  return (
    <Box layerStyle="boxSection">
      <Box sx={{ mb: '4', fontWeight: '600' }}>
        <Text as="span">Round #1</Text>
      </Box>
      <Grid gridTemplateColumns="50px 1fr" gap="4" sx={{ mb: '6' }}>
        <Box>
          <Img src="/img/logo.png" sx={{ width: '100%' }} />
        </Box>
        <Box>
          <Text
            as="span"
            sx={{
              fontSize: '14px',
              color: 'brand.400',
              fontWeight: '700',
              lineHeight: '1.2',
            }}
          >
            Total Pot
          </Text>
          <Text sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.2' }}>
            73,625 MMP
          </Text>
        </Box>
      </Grid>
      <Box>
        <Flex sx={{ justifyContent: 'space-between', mb: '2', px: '2' }}>
          <Box sx={{ color: 'brand.400', fontWeight: '700' }}>No. Matched</Box>
          <Box
            sx={{ textAlign: 'right', color: 'brand.400', fontWeight: '700' }}
          >
            Prize Pot
          </Box>
        </Flex>
        <PrizePotItem prize="1" matchingText="4" prizePot="40,085" />
        <PrizePotItem prize="2" matchingText="3" prizePot="20,120" />
        <PrizePotItem prize="3" matchingText="2" prizePot="10,100" />
      </Box>
      <Box sx={{ pt: '6' }}>
        The remaining{' '}
        <Text as="span" color="brand.400">
          3,320
        </Text>{' '}
        MMP tokens in prizepot will be automatically transferred to the next
        Lotto event.
      </Box>
    </Box>
  )
}

type PrizePotItemItemProps = {
  prize: string
  prizePot: string
  matchingText: string
}

export const PrizePotItem = (props: PrizePotItemItemProps) => {
  const { prize, matchingText, prizePot } = props

  const isFirstPrize = prize === '1'

  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'gray.700',
        px: '4',
        py: '2',
        '&:hover': {
          bgColor: 'gray.800',
        },

        ...(isFirstPrize && {
          fontSize: '20px',
          fontWeight: '600',
        }),
      }}
    >
      <Grid gridTemplateColumns="24px 1fr" gap="4" alignItems="center">
        <Img src={`/img/prize-${prize}.png`} />
        <Text>{matchingText}</Text>
      </Grid>
      <Box sx={{ textAlign: 'right' }}>{prizePot} MMP</Box>
    </Flex>
  )
}
