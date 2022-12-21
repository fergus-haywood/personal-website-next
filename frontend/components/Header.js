import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import CurrentTime from '../components/CurrentTime'
import MobileNavigation from '../components/MobileNavigation'

export default function Header({ props }) {
  const router = useRouter()
  function handleClick(e) {
    document.body.removeAttribute('style')
    document.body.style.backgroundColor = getComputedStyle(
      document.body
    ).getPropertyValue('--background-color')

    router.push(href)
  }

  return (
    <>
      <header className={styles.wrapper}>
        <h1 className={styles.title}>
          <a onClick={() => handleClick} href="/">
            Fergus Haywood
          </a>
        </h1>
        <AnnouncementBar />
        <CurrentTime />
        <MobileNavigation items={props.navigation} />
      </header>
    </>
  )
}
