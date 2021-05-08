import Document, { Html, Head, Main, NextScript } from 'next/document'

import 'stop-runaway-react-effects/hijack'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
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

          {GTM_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
    `,
              }}
            />
          )}
        </Head>
        <body>
          {GTM_ID && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
          )}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
