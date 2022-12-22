import styles from '../styles/Navigation.module.css'
import Link from 'next/link'
export default function Navigation({ content }) {
  function handleClick() {
    document.body.removeAttribute('style')
  }
  const mainNav = content.navigation.result[0][0].navItems
  const socialNav = content.navigation.result[0][1].navItems

  return (
    <>
      <nav className={styles.wrapper}>
        <ul className={styles.mainNavItemList}>
          {mainNav.map((item, i) => {
            return (
              <li
                id={item.text}
                key={item.text}
                className="navItem"
                onClick={() => handleClick()}
              >
                <Link href={`/${item.navItemUrl.linkUrl}`}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <ul className={styles.socialNavItemList}>
          {socialNav.map((item, i) => {
            return (
              <li key={item.text} className="navItem">
                <a target="_blank" href={item.navItemUrl.linkUrl}>
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
