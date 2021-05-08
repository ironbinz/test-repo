import { Box, Button, Text, VStack, Img } from '@chakra-ui/react'

export const HowItWorkSection = () => {
  return (
    <Box layerStyle="boxSection" sx={{ py: '12' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { base: ' 1fr', lg: '420px 1fr' },
        }}
      >
        <Box
          sx={{
            px: '6',
            pr: '12',
            maxWidth: { base: '300px', md: '400px', lg: '100%' },
            mx: { base: 'auto', lg: '0' },
            mb: { base: '6', lg: '0' },
          }}
        >
          <Img src="/img/character-4.png" />
        </Box>
        <Box sx={{ textAlign: { base: 'center', lg: 'left' } }}>
          <Text as="h2" textStyle="sectionTitle">
            How it works
          </Text>
          <VStack spacing="8" align="flex-start">
            <Text sx={{ fontSize: '18px' }}>
              Spend{' '}
              <Text as="span" textStyle="highlightText">
                MMP
              </Text>{' '}
              to buy tickets, contributing to the lottery pot. Win prizes if 2,
              3, or 4 of your ticket numbers match the winning numbers and their
              exact order!
            </Text>
            <Box sx={{ w: '100%' }}>
              <Button>Learn more</Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}
