import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from '@/styles/ThemeProvider'

interface ProvidersProps {
  children: ReactNode
}

const Providers = (props: ProvidersProps) => {
  const { children } = props

  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: any, options: any = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
