import { Box, Flex, Text } from '@chakra-ui/react'
import { ConnectorConfig, connectors } from './config'

type Props = {
  onSelect: (connector: ConnectorConfig) => void
}

export const WalletList = (props: Props) => {
  const { onSelect } = props

  return (
    <Box sx={{ borderRadius: '16px', bgColor: 'gray.700', p: '4' }}>
      <Text
        sx={{
          fontSize: '20px',
          fontWeight: '700',
          pb: '3',
          mb: '3',
          borderBottom: '1px solid',
          borderColor: 'gray.600',
        }}
      >
        Connect to a wallet
      </Text>
      {connectors.map((connector) => {
        const { title, icon: Icon } = connector

        return (
          <Flex
            onClick={() => onSelect(connector)}
            key={title}
            sx={{
              mb: '3',
              justifyContent: 'space-between',
              bgColor: 'gray.600',
              pr: '2',
              pl: '6',
              py: '2',
              borderRadius: 'full',
              alignItems: 'center',
              transition: 'background-color 0.2s ease-in-out',
              cursor: 'pointer',
              userSelect: 'none',
              fontWeight: '600',

              '&:hover': {
                bgColor: 'brand.400',
                color: 'gray.900',
              },
            }}
          >
            <Box>{title}</Box>
            <Icon boxSize="32px" />
          </Flex>
        )
      })}
    </Box>
  )
}
