import styles from '../styles/Header.module.css'

import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import CurrentTime from '../components/CurrentTime'
import MobileNavigation from '../components/MobileNavigation'

export default function Header({ props }) {
  return (
    <>
      <header className={styles.wrapper}>
        <h1 className={styles.title}>
          <Link href="/">Fergus Haywood</Link>
        </h1>
        <AnnouncementBar />
        <CurrentTime />
        <MobileNavigation props={props} />
      </header>
    </>
  )
}
