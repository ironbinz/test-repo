import {
  UseDisclosureReturn,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react'
import useAuth from '@/modules/WalletConnectors/hooks/useAuth'
import { Modal } from '@/components/Modal'
import { WalletList } from '@/modules/WalletConnectors/components/WalletList'
import { connectorLocalStorageKey } from '@/modules/WalletConnectors/constants'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

type LoginModalProps = {
  loginDisclosure: UseDisclosureReturn
}

export const LoginModal = (props: LoginModalProps) => {
  const { loginDisclosure } = props
  const { isOpen, onClose } = loginDisclosure
  const { login } = useAuth()
  const { account } = useWeb3React()
  const toast = useToast()

  useEffect(() => {
    if (account) {
      toast({
        title: 'Connected',
        status: 'success',
        position: 'bottom-right',
      })
    }
  }, [account])

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxW="380px">
      <WalletList
        onSelect={(connector) => {
          login(connector.connectorId)

          window.localStorage.setItem(
            connectorLocalStorageKey,
            connector.connectorId,
          )

          onClose()
        }}
      />
      <ModalCloseButton />
    </Modal>
  )
}
