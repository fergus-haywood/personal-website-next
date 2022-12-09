import styles from '../styles/Header.module.css'

import AnnouncementBar from './AnnouncementBar'
import CurrentTime from '../components/CurrentTime'

export default function Header() {
  return (
    <>
      <header className={styles.wrapper}>
        <h1 className={styles.title}>Fergus Haywood</h1>
        <AnnouncementBar />
        <CurrentTime />
      </header>
    </>
  )
}
