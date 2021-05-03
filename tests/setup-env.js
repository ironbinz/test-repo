import '@testing-library/jest-dom/extend-expect'

jest.mock('next/config', () => () => ({
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
}))

const noop = () => {}
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true })
