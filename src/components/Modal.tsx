import { ReactNode } from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalProps as ChakraModalProps,
} from '@chakra-ui/react'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  maxW?: string
} & ChakraModalProps

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, maxW = '700px', ...rest } = props

  return (
    <ChakraModal
      onClose={onClose}
      isOpen={isOpen}
      isCentered={false}
      motionPreset="slideInBottom"
      {...rest}
    >
      <ModalOverlay>
        <ModalContent
          sx={{
            maxW: maxW,
            pb: '4',
            borderRadius: '16px',
          }}
        >
          {children}
        </ModalContent>
      </ModalOverlay>
    </ChakraModal>
  )
}
