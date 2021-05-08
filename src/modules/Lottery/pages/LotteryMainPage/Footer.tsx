import { HStack, Button } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <HStack spacing="6" justify="center" sx={{ pt: '8', pb: '12' }}>
      <Button
        variant="outline"
        size="lg"
        as="a"
        href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x768d221e81524de52841aed976370b2e4f990416"
        target="_blank"
        rel="noopenner"
      >
        Buy MMP
      </Button>
      <Button
        variant="outline"
        size="lg"
        as="a"
        href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2e5d9e9977e5f301fd952230d39c2f1be0157ad7&inputCurrency=0x768d221e81524de52841aed976370b2e4f990416"
        target="_blank"
        rel="noopenner"
      >
        Buy wMMP
      </Button>
    </HStack>
  )
}
