import styles from '../styles/MobileNavigation.module.css'
import { useState } from 'react'

export default function Navigation(props) {
  // const mainNav = props.props.navigation.mainNav
  // const socialNav = props.props.navigation.socialNav

  const [menuStatus, setMenuStatus] = useState('Menu')
  const [isActive, setActive] = useState(false)

  function handleClick(e) {
    menuStatus === 'Menu' ? setMenuStatus('Close') : setMenuStatus('Menu')
    setActive((current) => !current)
  }
  return (
    <>
      <p onClick={() => handleClick()} className={styles.menuButton}>
        {menuStatus}
      </p>
      {/* <nav className={`mobileNavWrapper ${isActive ? 'is-active' : ''}`}>
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
      </nav> */}
    </>
  )
}