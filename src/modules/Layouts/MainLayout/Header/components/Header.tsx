import {
  Box,
  Button,
  Img,
  Text,
  useDisclosure,
  UseDisclosureReturn,
  ModalCloseButton,
  useClipboard,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { ChevronDownIcon, ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import { VscDebugDisconnect } from 'react-icons/vsc'

import useAuth from '@/modules/WalletConnectors/hooks/useAuth'
import { Modal } from '@/components/Modal'
import { WalletList } from '@/modules/WalletConnectors/components/WalletList'
import { connectorLocalStorageKey } from '@/modules/WalletConnectors/constants'

export const Header = () => {
  const { account } = useWeb3React()
  const loginDisclosure = useDisclosure()
  const accountDisclosure = useDisclosure()

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

type LoginModalProps = {
  loginDisclosure: UseDisclosureReturn
}

const LoginModal = (props: LoginModalProps) => {
  const { loginDisclosure } = props
  const { isOpen, onClose } = loginDisclosure
  const { login } = useAuth()
  const toast = useToast()

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxW="380px">
      <WalletList
        onSelect={(connector) => {
          login(connector.connectorId)

          window.localStorage.setItem(
            connectorLocalStorageKey,
            connector.connectorId,
          )

          toast({
            title: 'Connected',
            status: 'success',
            position: 'bottom-right',
          })

          onClose()
        }}
      />
      <ModalCloseButton />
    </Modal>
  )
}

type AccountProps = {
  accountDisclosure: UseDisclosureReturn
}

const AccountModal = (props: AccountProps) => {
  const { accountDisclosure } = props
  const { isOpen, onClose } = accountDisclosure
  const { account } = useWeb3React()
  const { logout } = useAuth()
  const toast = useToast()

  const value = account || ''
  const { onCopy, hasCopied } = useClipboard(value)

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxW="560px">
      <VStack sx={{ textAlign: 'center', py: '6' }} spacing="4">
        <Text sx={{ fontSize: '24px', fontWeight: '600' }}>Your Wallet</Text>
        <Box sx={{ px: '6' }}>
          <Box
            sx={{
              bgColor: 'gray.800',
              borderRadius: '16px',
              px: '6',
              py: '2',
              mb: '4',
              ...(hasCopied && {
                color: 'brand.400',
              }),
            }}
          >
            {account}
          </Box>
          <Box
            sx={{ borderBottom: '1px solid', borderColor: 'gray.600', pb: '4' }}
          >
            <Button
              as="a"
              href={`https://bscscan.com/address/${account}`}
              target="_blank"
              sx={{ mr: '4' }}
              variant="outline"
              rightIcon={<ExternalLinkIcon />}
            >
              View on BSC
            </Button>
            <Button onClick={onCopy} variant="outline" rightIcon={<LinkIcon />}>
              Copy Address
            </Button>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={() => {
              logout()
              window.localStorage.removeItem(connectorLocalStorageKey)
              onClose()
              toast({
                title: 'Disconnected',
                status: 'info',
                position: 'bottom-right',
              })
            }}
            variant="solid"
            leftIcon={<VscDebugDisconnect size="20px" />}
          >
            Disconnect
          </Button>
        </Box>
      </VStack>
      <ModalCloseButton />
    </Modal>
  )
}

type UserBlockProps = {
  account?: string | null
  accountDisclosure: UseDisclosureReturn
  loginDisclosure: UseDisclosureReturn
}

const UserBlock = (props: UserBlockProps) => {
  const { account, loginDisclosure, accountDisclosure } = props

  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null

  return (
    <Box>
      {account ? (
        <Button
          onClick={accountDisclosure.onOpen}
          rightIcon={<ChevronDownIcon />}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button sx={{ fontWeight: '700' }} onClick={loginDisclosure.onOpen}>
          Connect Wallet
        </Button>
      )}
    </Box>
  )
}
