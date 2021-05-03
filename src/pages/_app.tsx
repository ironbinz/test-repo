import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NextComponentType } from 'next'
import { DefaultSeo } from 'next-seo'
import { ErrorBoundary } from 'react-error-boundary'

import { ThemeProvider } from '@/styles/ThemeProvider'

const Noop = ({ children }: any) => children

type PageComponentType = {
  Layout?: FunctionComponent
} & NextComponentType

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
})

function MyApp(props: AppProps) {
  const { pageProps } = props
  const Component: PageComponentType = props.Component
  const Layout = Component.Layout || Noop

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <DefaultSeo title="Moonmakerprotocol" titleTemplate="%s - MMP" />
        <ErrorBoundary FallbackComponent={() => null}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
