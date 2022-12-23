import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import { useEffect, useState } from 'react'

export default function Layout(props) {
  const [navigation, setNavigation] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
      const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
      const navigationBody = await fetch(navigationURL).then((res) =>
        res.json()
      )
      setNavigation(navigationBody.result[0])
      setLoaded(true)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <>
      <Head>
        <title>Fergus Haywood</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      {loaded && (
        <>
          <Header content={navigation} />
          <Navigation content={navigation} />
        </>
      )}
      <main className="main-wrapper">{props.children}</main>
      <Footer />
    </>
  )
}
