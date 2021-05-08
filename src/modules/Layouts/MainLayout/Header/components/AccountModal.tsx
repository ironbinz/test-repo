import {
  Box,
  Button,
  Text,
  UseDisclosureReturn,
  ModalCloseButton,
  useClipboard,
  VStack,
  useToast,
  useMediaQuery,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import { VscDebugDisconnect } from 'react-icons/vsc'
import useAuth from '@/modules/WalletConnectors/hooks/useAuth'
import { Modal } from '@/components/Modal'
import { connectorLocalStorageKey } from '@/modules/WalletConnectors/constants'
import { useAccountEllipsis } from '@/modules/WalletConnectors/hooks/useAccountEllipsis'

type AccountProps = {
  accountDisclosure: UseDisclosureReturn
}

export const AccountModal = (props: AccountProps) => {
  const { accountDisclosure } = props
  const { isOpen, onClose } = accountDisclosure
  const { account } = useWeb3React()
  const { logout } = useAuth()
  const toast = useToast()
  const accountEllipsis = useAccountEllipsis()
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')

  const value = account || ''
  const { onCopy, hasCopied } = useClipboard(value)

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxW="560px">
      <VStack sx={{ textAlign: 'center', py: '6' }} spacing="4">
        <Text sx={{ fontSize: '24px', fontWeight: '700', color: 'brand.400' }}>
          Your Wallet
        </Text>
        <Box sx={{ px: '6' }}>
          <Box
            sx={{
              bgColor: 'gray.900',
              borderRadius: '16px',
              px: '6',
              py: '2',
              mb: '4',
              ...(hasCopied && {
                color: 'brand.400',
              }),
            }}
          >
            {isLargerThan1024 ? account : accountEllipsis}
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
            <Button
              onClick={onCopy}
              variant={hasCopied ? 'solid' : 'outline'}
              rightIcon={<LinkIcon />}
              sx={{
                minW: '150px',
              }}
            >
              {hasCopied ? 'Copied' : 'Copy Address'}
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
