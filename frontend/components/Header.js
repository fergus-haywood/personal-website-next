import styles from '../styles/Header.module.css'

import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import CurrentTime from '../components/CurrentTime'
import MobileNavigation from '../components/MobileNavigation'

export default function Header({ props }) {
  function handleClick(e) {
    console.log('triggered')
    document.body.removeAttribute('style')
    document.body.style.backgroundColor = getComputedStyle(
      document.body
    ).getPropertyValue('--background-color')
  }

  return (
    <>
      <header className={styles.wrapper}>
        <h1 className={styles.title}>
          <a onClick={(e) => handleClick(e)}>
            <Link href="/">Fergus Haywood</Link>
          </a>
        </h1>
        <AnnouncementBar />
        <CurrentTime />
        <MobileNavigation items={props.navigation} />
      </header>
    </>
  )
}
