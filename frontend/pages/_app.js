import App from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'
import { useState, useEffect, use } from 'react'
import Router from 'next/router'
import nProgress from 'nprogress'

export default function MyApp(props) {
  const { Component, pageProps } = props
  nProgress.configure({ showSpinner: false })

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      nProgress.start()
    })
    Router.events.on('routeChangeComplete', (url) => {
      nProgress.done(false)
    })

    Router.events.on('routeChangeError', (url) => {
      nProgress.done(false)
    })
  }, [Router])
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
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
