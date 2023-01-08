import App from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'

export default function MyApp(props) {
  const { Component, pageProps } = props
  return (
    <>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-32CBED8Z0C"
        strategy="afterInteractive"
      ></Script>
      <Script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-32CBED8Z0C');
      </Script> */}

      <Layout navigation={props.navigationBody}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (context) => {
  const pageProps = await App.getInitialProps(context) // Retrieves page's `getInitialProps`

  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  return {
    ...pageProps,
    navigationBody,
  }
}
