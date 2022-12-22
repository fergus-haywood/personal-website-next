import styles from '../styles/Footer.module.css'

import { useState } from 'react'

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleClick() {
    setIsDarkMode(!isDarkMode)
    const root = document.documentElement
    if (isDarkMode) {
      root.style.setProperty('--background-color', 'var(--light-background)')
      root.style.setProperty('--color', '#000000')
    } else {
      root.style.setProperty('--background-color', 'var(--dark-background)')
      root.style.setProperty('--color', '#FFFFFF')
    }
  }
  return (
    <footer className={styles.wrapper}>
      <div className={styles.themePicker}>
        <span
          className={styles.themeToggle}
          onClick={() => handleClick()}
        ></span>
      </div>
      <div className={styles.footerEmail}>
        <a href="mailto:hello@fergushaywood.com">hello@fergushaywood.com</a>
      </div>
    </footer>
  )
}
