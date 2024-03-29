import Layout from '../components/Layout'
import About from '../components/About'
import HomePageImage from '../components/HomePageImage'

export default function Home(props) {
  return (
    <Layout navigation={props.navigationBody}>
      <About content={props.aboutBody} />
      <HomePageImage image={props.aboutBody} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  const aboutQuery = encodeURIComponent(`*[ _type == 'about']`)
  const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`
  const aboutBody = await fetch(aboutURL).then((res) => res.json())
  return {
    props: {
      navigationBody,
      aboutBody,
    },
  }
}
