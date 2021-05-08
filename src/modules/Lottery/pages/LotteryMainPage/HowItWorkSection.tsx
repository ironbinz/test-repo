import { Box, Button, Text, VStack } from '@chakra-ui/react'

export const HowItWorkSection = () => {
  return (
    <Box layerStyle="boxSection">
      <Box sx={{ display: 'grid', gridTemplateColumns: '380px 1fr' }}>
        <Box>Logo</Box>
        <Box>
          <Text as="h2" textStyle="sectionTitle">
            How it works
          </Text>
          <VStack spacing="4" align="flex-start">
            <Text>
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
