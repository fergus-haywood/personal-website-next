import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

const content = await fetchData()
export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Fergus Haywood</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <Navigation content={content} />
      <Header content={content} />

      <main className="main-wrapper">{props.children}</main>
      <Footer />
    </>
  )
}

export async function fetchData() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  return navigationBody
}
