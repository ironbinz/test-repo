import { Flex, Box, Text } from '@chakra-ui/react'

export const CommingSoonSection = () => {
  return (
    <Flex
      layerStyle="boxSection"
      sx={{
        backgroundImage: `url("/img/character-1.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
          base: '100% 10px',
          sm: '100% -20px',
          md: '100% -70px',
          lg: '90% -110px',
        },
        backgroundSize: {
          base: '150px',
          sm: '200px',
          md: '300px',
          lg: '400px',
        },
      }}
    >
      <Box>
        <Text
          as="h1"
          textStyle="sectionTitle"
          sx={{
            fontSize: { base: '24px', sm: '28px' },
            maxW: { base: '260px', sm: '380px', md: '500px' },
          }}
        >
          The Moon Maker Protocol Lottery
        </Text>
        <Text sx={{ fontSize: '18px' }}>Coming soon!</Text>
      </Box>
    </Flex>
  )
}
