import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import About from '../components/About'

export default function Home(props) {
  console.log(props)
  return (
    <Layout navigation={props.navigationBody}>
      <About content={props.aboutBody} />
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

  const clientsQuery = encodeURIComponent(`*[ _type == 'clients']`)
  const clientURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${clientsQuery}]`
  const clients = await fetch(clientURL).then((res) => res.json())

  const projectsQuery = encodeURIComponent(`*[ _type == 'projects']`)
  const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`
  const projects = await fetch(projectURL).then((res) => res.json())
  return {
    props: {
      navigationBody,
      aboutBody,
    },
  }
}
