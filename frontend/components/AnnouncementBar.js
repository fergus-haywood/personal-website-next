import { useState, useEffect } from 'react'
import styles from '../styles/AnnouncementBar.module.css'
export default function announcementBar() {
  const [announcementBar, setAnnouncementBar] = useState(
    'Lets work together 🤝'
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.surround}>
        <h4 className={styles.inner}>{announcementBar}</h4>
      </div>
    </div>
  )
}
