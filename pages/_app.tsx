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
const SEGMENT_WRITE_TOKEN = process.env.SEGMENT_WRITE_TOKEN
const segment = AnalyticsBrowser.load({ writeKey: `${SEGMENT_WRITE_TOKEN}` })

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(HJID, HJSV)
    segment.page('Page View')
  }, [segment])

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
      {/* <Script
        id='segment-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${SEGMENT_WRITE_TOKEN}";;analytics.SNIPPET_VERSION="4.15.3";
        analytics.load("${SEGMENT_WRITE_TOKEN}");
        analytics.page();
        }}();
  `,
        }}
      /> */}
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
