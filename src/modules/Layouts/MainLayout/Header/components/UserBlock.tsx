import { Box, Button, UseDisclosureReturn } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

type UserBlockProps = {
  account?: string | null
  accountDisclosure: UseDisclosureReturn
  loginDisclosure: UseDisclosureReturn
}

export const UserBlock = (props: UserBlockProps) => {
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
