import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout(props) {
  return (
    <>
      <Head />
      <Header />
      <Navigation content={props} />
      <main className="main-wrapper">{props.children}</main>
      <Footer />
    </>
  )
}
