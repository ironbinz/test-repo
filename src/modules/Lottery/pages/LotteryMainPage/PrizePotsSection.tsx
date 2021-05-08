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
            82,104 MMP
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
        <PrizePotItem matchingText="4" prizePot="10,085" />
        <PrizePotItem matchingText="3" prizePot="2,085" />
        <PrizePotItem matchingText="2" prizePot="43,085" />
      </Box>
    </Box>
  )
}

type PrizePotItemItemProps = {
  prizePot: string
  matchingText: string
}

export const PrizePotItem = (props: PrizePotItemItemProps) => {
  const { matchingText, prizePot } = props

  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'gray.700',
        px: '4',
        py: '2',
        '&:hover': {
          bgColor: 'gray.800',
        },
      }}
    >
      <Box>{matchingText}</Box>
      <Box sx={{ textAlign: 'right' }}>{prizePot} MMP</Box>
    </Flex>
  )
}
