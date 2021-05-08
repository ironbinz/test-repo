import { Box, Button, Text, VStack, Img } from '@chakra-ui/react'

export const HowItWorkSection = () => {
  return (
    <Box layerStyle="boxSection" sx={{ py: '12', mb: '12' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '420px 1fr' }}>
        <Box sx={{ px: '6', pr: '12' }}>
          <Img src="/img/character-4.png" />
        </Box>
        <Box>
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
            <Button>Learn more</Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}
