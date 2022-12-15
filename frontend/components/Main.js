import React from 'react'
import Navigation from './Navigation'
import About from './About'
import Clients from './Clients'
import Contact from './Contact'
import Projects from './Projects'
import styles from '../styles/Main.module.css'
import { useState, useEffect } from 'react'

export default function Main(props) {
  const [content, setContent] = useState('About')
  const [projects, setProject] = useState()

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContent}>
        {
          {
            About: <About body={props.props.about} />,
            Clients: <Clients clients={props.props.clients} />,
            Contact: <Contact />,
            Projects: <Projects projects={props.props.projects} />,
          }[content]
        }
      </div>
    </div>
  )
}
