import styles from '../styles/Clients.module.css'
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'

export default function Clients({ clients }) {
  const [clientContent, setClientContent] = useState({})

  const clientList = clients.clients.result[0].sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  function handleClick(e) {
    const targetClient = e.target.id
    const content = clientList.find((content) => content.title == targetClient)
    setClientContent(content)
    clientsItems.forEach((client) => client.classList.remove('active-client'))
    e.target.classList.add('active-client')
  }

  if (typeof window !== 'undefined') {
    const clientsItems = document.querySelectorAll('.Clients_clientItem__D8a_q')
    const root = document.documentElement
    if (clientContent) {
      document.body.style.backgroundColor = clientContent.backgroundColor
    } else {
      document.body.style.backgroundColor = getComputedStyle(
        document.body
      ).getPropertyValue('--background-color')
    }
  }

  return (
    <>
      <div className={styles.clientWrapper}>
        {clientList.map((client) => {
          return (
            <>
              <a
                id={client.title}
                key={client.title}
                // href={client.link.linkUrl}
                className={styles.clientItem}
                onClick={(e) => handleClick(e)}
              >
                {client.title}
                <span className={styles.clientOrigin}>({client.origin})</span>
              </a>
            </>
          )
        })}
      </div>
      <div className={styles.clientContent}>
        {clientContent && (
          <img
            src={urlFor(clientContent.mainImage)}
            className={styles.clientImage}
          />
        )}
        <div className={styles.clientDisciplines}>
          {clientContent.disciplines}
        </div>
        {clientContent.link && (
          <a
            href={clientContent.link.linkUrl}
            className="projectLink"
            target="_blank"
          >
            View Client{' '}
            <img
              class={styles.projectArrow}
              src="./projectArrow.svg"
              width="15"
            />
          </a>
        )}
      </div>
    </>
  )
}
