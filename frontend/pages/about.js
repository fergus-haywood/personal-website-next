import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function About({ props }) {
  // const bodyBlock = props.aboutBody.result[0][0].body

  console.log(props)

  return (
    <div className={styles.aboutContent}>
      {/* <BlockContent blocks={bodyBlock} /> */}
    </div>
  )
}

export async function getServerSideProps() {
  const aboutQuery = encodeURIComponent(`*[ _type == 'about']`)
  const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`
  const aboutBody = await fetch(aboutURL).then((res) => res.json())

  return {
    props: {
      aboutBody,
    },
  }
}
