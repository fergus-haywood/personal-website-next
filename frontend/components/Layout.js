import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Fergus Haywood</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-32CBED8Z0C"
      ></Script>
      <Script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-32CBED8Z0C');
      </Script>

      <Navigation content={props.navigation} />
      <Header content={props.navigation} />

      <main className="main-wrapper">{props.children}</main>
      <Footer />
    </>
  )
}
