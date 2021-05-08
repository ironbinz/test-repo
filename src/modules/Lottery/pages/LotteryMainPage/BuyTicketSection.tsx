import { Grid, Box, Button, Text, VStack } from '@chakra-ui/react'

export const BuyTicketSection = () => {
  return (
    <Grid layerStyle="boxSection" gridTemplateRows="1fr max-content">
      <Box>
        <Box textStyle="sectionTitle" sx={{ color: 'brand.400' }}>
          Your tickets for this round
        </Box>
        <Box>
          <Text sx={{ fontSize: '52px', fontWeight: '700' }}>
            32{' '}
            <Text as="span" sx={{ fontSize: '14px', fontWeight: '600' }}>
              Tickets
            </Text>
          </Text>
        </Box>
      </Box>
      <VStack spacing="6">
        <Button
          variant="outline"
          isFullWidth
          size="lg"
          sx={{ py: '8', px: '12', fontSize: '24px' }}
        >
          View your tickets
        </Button>
        <Button
          isFullWidth
          size="lg"
          sx={{ py: '8', px: '12', fontSize: '24px' }}
        >
          Buy Tickets
        </Button>
      </VStack>
    </Grid>
  )
}
