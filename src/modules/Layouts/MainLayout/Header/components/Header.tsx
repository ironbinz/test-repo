import {
  Box,
  Img,
  LinkBox,
  LinkOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'

import { LoginModal } from './LoginModal'
import { AccountModal } from './AccountModal'
import { UserBlock } from './UserBlock'

export const Header = () => {
  const { account } = useWeb3React()
  const loginDisclosure = useDisclosure()
  const accountDisclosure = useDisclosure()
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)')

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
        <LinkBox sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ maxW: '40px', mr: '4' }}>
            <LinkOverlay href="https://moonmakerprotocol.com/">
              <Img src="/img/logo.png" sx={{ width: '100%' }} />
            </LinkOverlay>
          </Box>
          {isLargerThan640 && (
            <Text sx={{ fontWeight: '700', fontSize: '18px' }}>
              Moon{' '}
              <Text as="span" sx={{ color: 'brand.400' }}>
                Maker
              </Text>{' '}
              Protocol
            </Text>
          )}
        </LinkBox>
        <UserBlock
          account={account}
          loginDisclosure={loginDisclosure}
          accountDisclosure={accountDisclosure}
        />
      </Box>
      <LoginModal loginDisclosure={loginDisclosure} />
      <AccountModal accountDisclosure={accountDisclosure} />
    </Box>
  )
}
