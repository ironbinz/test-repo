export const Switch = {
  parts: ['thumb', 'track'],
  baseStyle: {
    thumb: {},
    track: {
      bgColor: '#ccc',
      boxShadow: 'none !important',
    },
  },
  sizes: {
    lg: {
      track: {
        padding: '4px',
        width: '2.575rem',
        height: '1.2rem',
      },
      thumb: {
        boxSize: '1.2rem',
        _checked: {
          transform: 'translateX(1.275rem)',
        },
      },
    },
  },
  defaultProps: {
    size: 'lg',
    colorScheme: 'green',
  },
}
