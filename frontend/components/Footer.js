import styles from '../styles/Footer.module.css'

export default function Footer() {
  function toggleTheme(theme) {
    const root = document.documentElement
    if (theme == 'light') {
      root.style.setProperty('--background-color', 'var(--light-background)')
      root.style.setProperty('--color', '#000000')
    } else if (theme == 'cream') {
      root.style.setProperty('--background-color', 'var(--cream-background)')
      root.style.setProperty('--color', '#000000')
    } else if (theme == 'dark') {
      root.style.setProperty('--background-color', 'var(--dark-background)')
      root.style.setProperty('--color', '#FFFFFF')
    }
  }
  return (
    <footer className={styles.wrapper}>
      <div className={styles.themePicker}>
        <span
          className={styles.lightMode}
          onClick={() => toggleTheme('light')}
        ></span>
        <span
          className={styles.darkMode}
          onClick={() => toggleTheme('dark')}
        ></span>
        <span
          className={styles.creamMode}
          onClick={() => toggleTheme('cream')}
        ></span>
      </div>
      <div className={styles.footerEmail}>
        <a href="mailto:hello@fergushaywood.com">hello@fergushaywood.com</a>
      </div>
    </footer>
  )
}
