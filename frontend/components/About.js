import styles from '../styles/About.module.css'
import BlockContent from '@sanity/block-content-to-react'

export default function About({ content }) {
  const bodyBlock = content.result[0][0].body

  return (
    <div className={styles.aboutContent}>
      <BlockContent blocks={bodyBlock} />
    </div>
  )
}
