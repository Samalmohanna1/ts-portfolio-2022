import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AnalyticsBrowser } from '@segment/analytics-next'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import Layout from '../components/layout/Layout'
import '../styles/theme/styles.css'
import theme from '../styles/theme/theme'

const GA_TRACKING_ID = process.env.GA_TRACKING_ID
const HJID = Number(process.env.HJID)
const HJSV = Number(process.env.HJSV)
const SEGMENT_WRITE_TOKEN = String(process.env.SEGMENT_WRITE_TOKEN)
const segment = AnalyticsBrowser.load({ writeKey: SEGMENT_WRITE_TOKEN })

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(HJID, HJSV)
    segment.page('Page View')
  }, [])
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
