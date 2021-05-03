const parts = ['control', 'label', 'description', 'icon']

const sizes = {
  sm: {
    control: { h: 3, w: 3 },
    label: { fontSize: 'sm' },
  },
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: 'md' },
  },
  lg: {
    control: { w: 5, h: 5 },
    label: { fontSize: 'lg' },
  },
}

const defaultProps = {
  size: 'md',
  colorScheme: 'brand',
}

const baseStyle = {
  control: {
    borderWidth: '1px',
    borderRadius: '5px',

    _focus: {
      boxShadow: 'none',
    },
  },
}

export const Checkbox = {
  parts,
  baseStyle,
  sizes,
  defaultProps,
}
