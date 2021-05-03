import { Box, Button, Img, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box
      sx={{
        bgColor: 'gray.900',
        borderColor: 'gray.700',
        p: '4',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ maxW: '40px', mr: '4' }}>
            <Img src="/img/logo.png" sx={{ width: '100%' }} />
          </Box>
          <Text sx={{ fontWeight: '700' }}>
            Moon{' '}
            <Text as="span" sx={{ color: 'brand.400' }}>
              Maker
            </Text>{' '}
            Protocol
          </Text>
        </Box>
        <Button sx={{ fontWeight: '700' }}>Connect Wallet</Button>
      </Box>
    </Box>
  )
}
