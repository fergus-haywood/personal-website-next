import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

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

      <Navigation content={props.navigation} />
      <Header content={props.navigation} />

      <main className="main-wrapper">{props.children}</main>
      <Footer />
    </>
  )
}
