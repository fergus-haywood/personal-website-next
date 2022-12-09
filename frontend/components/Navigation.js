import styles from '../styles/Navigation.module.css'

export default function Navigation(props) {
  const mainNav = props.navigation.mainNav
  const socialNav = props.navigation.socialNav

  function handleClick(e) {
    props.content(e.target.id)
    document.body.removeAttribute('style')
  }

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
                onClick={(e) => handleClick(e)}
              >
                {item.text}
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
