import { Flex, Box, Text } from '@chakra-ui/react'

export const CommingSoonSection = () => {
  return (
    <Flex
      layerStyle="boxSection"
      sx={{
        backgroundImage: `url("/img/character-1.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% -110px',
        backgroundSize: '400px',
      }}
    >
      <Box>
        <Text as="h1" textStyle="sectionTitle">
          The Moon Maker Protocol Lottery
        </Text>
        <Text sx={{ fontSize: '18px' }}>Coming soon!</Text>
      </Box>
    </Flex>
  )
}
