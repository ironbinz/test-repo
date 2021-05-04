import {
  Box,
  Button,
  Text,
  UseDisclosureReturn,
  ModalCloseButton,
  useClipboard,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import { VscDebugDisconnect } from 'react-icons/vsc'
import useAuth from '@/modules/WalletConnectors/hooks/useAuth'
import { Modal } from '@/components/Modal'
import { connectorLocalStorageKey } from '@/modules/WalletConnectors/constants'

type AccountProps = {
  accountDisclosure: UseDisclosureReturn
}

export const AccountModal = (props: AccountProps) => {
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
