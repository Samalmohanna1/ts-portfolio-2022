import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from '../components/layout/Layout'
import '../styles/theme/styles.css'
import theme from '../styles/theme/theme'

const GA_TRACKING_ID = process.env.GTAG_MEASURMENT_ID

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id='gtag-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GA_TRACKING_ID}');
          `}
      </Script>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
