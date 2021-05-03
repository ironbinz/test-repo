import Document, { Html, Head, Main, NextScript } from 'next/document'

import 'stop-runaway-react-effects/hijack'
export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: any) {
    const documentProps = renderPage()

    return {
      ...documentProps,
      styles: null,
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href={'/favicon.ico'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
