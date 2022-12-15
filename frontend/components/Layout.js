import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Navigation from './Navigation'

export default function Layout({ ...props }) {
  return (
    <>
      <Head />
      <Header />
      <Navigation content={props} />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
