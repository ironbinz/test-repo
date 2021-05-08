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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
