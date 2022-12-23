import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import CurrentTime from '../components/CurrentTime'
import MobileNavigation from '../components/MobileNavigation'

export default function Header({ content }) {
  function handleClick(e) {
    document.body.removeAttribute('style')
  }

  return (
    <>
      <header className={styles.wrapper}>
        <h1 className={styles.title}>
          <Link legacyBehavior href="/">
            <a onClick={() => handleClick()}>Fergus Haywood</a>
          </Link>
        </h1>
        <AnnouncementBar />
        <CurrentTime />
        <MobileNavigation items={content} />
      </header>
    </>
  )
}
