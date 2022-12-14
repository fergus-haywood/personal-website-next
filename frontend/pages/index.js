import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <>
      <Head />
      <Header props={props} />
      <Main props={props} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const navgigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationUrl = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=${navgigationQuery}`

  const result = await fetch(navigationUrl).then((res) => res.json())

  const mainNav = result.result[0].navItems
  const socialNav = result.result[1].navItems

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
      navigation: {
        mainNav,
        socialNav,
      },
      about: {
        aboutBody,
      },
      clients: {
        clients,
      },
      projects: {
        projects,
      },
    },
  }
}
