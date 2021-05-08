import { mode, transparentize } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

type AccessibleColor = {
  bg?: string
  color?: string
  hoverBg?: string
  activeBg?: string
}

const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
    hoverBg: 'yellow.500',
    activeBg: 'yellow.600',
  },
  cyan: {
    bg: 'cyan.400',
    color: 'black',
    hoverBg: 'cyan.500',
    activeBg: 'cyan.600',
  },
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props

  if (c === 'gray')
    return {
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      _hover: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
    }

  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}.300`,
    activeBg = `${c}.600`,
  } = accessibleColorMap[c] || {}
  return {
    bg: mode(bg, `${c}.500`)(props),
    border: '1px solid',
    borderColor: mode(bg, `${c}.500`)(props),
    color: mode(color, `white`)(props),
    _hover: { bg: mode(hoverBg, `${c}.300`)(props) },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props)

  return {
    border: '1px solid',
    borderColor: c === 'gray' ? borderColor : 'currentColor',
    ...variantGhost(props),
  }
}

function variantGhost(props: Dict) {
  const { colorScheme: c, theme } = props

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: { bg: mode(`gray.100`, `whiteAlpha.200`)(props) },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    }
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme)
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme)

  return {
    color: mode(`${c}.500`, `${c}.500`)(props),
    bg: 'transparent',
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  }
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props
  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: mode(`${c}.500`, `${c}.500`)(props),
    _hover: { textDecoration: 'underline' },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
  }
}

const variantUnstyled = {
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: 0,
  p: 0,
}

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
}

export const Button = {
  baseStyle: {
    fontWeight: 600,
    fontSize: '14px',
    borderRadius: '16px',
  },
  sizes: {
    md: {
      fontSize: '14px',
    },
    lg: {
      fontSize: '16px',
    },
  },
  variants,
  defaultProps: {
    colorScheme: 'brand',
  },
}
