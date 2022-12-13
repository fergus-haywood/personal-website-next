import styles from '../styles/About.module.css'
import BlockContent from '@sanity/block-content-to-react'

const aboutQuery = encodeURIComponent(`*[ _type == 'about']`)
const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`
const aboutBody = await fetch(aboutURL).then((res) => res.json())

export default function About({ body }) {
  const bodyBlock = aboutBody.result[0][0].body

  return (
    <div className={styles.aboutContent}>
      <BlockContent blocks={bodyBlock} />
    </div>
  )
}
