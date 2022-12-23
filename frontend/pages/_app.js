import App from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

export default function MyApp(props) {
  const { Component, pageProps } = props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
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
