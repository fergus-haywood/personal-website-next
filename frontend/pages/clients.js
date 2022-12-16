import styles from '../styles/Clients.module.css'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import imageUrlBuilder from '@sanity/image-url'

export default function Clients(props) {
  const [clientContent, setClientContent] = useState({})
  let clientItems = []

  const clientList = props.clients.result[0].sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  if (typeof window !== 'undefined') {
    clientItems = document.querySelectorAll('.Clients_clientItem__D8a_q')
    if (clientContent) {
      document.body.style.backgroundColor = clientContent.backgroundColor
    } else {
      document.body.style.backgroundColor = getComputedStyle(
        document.body
      ).getPropertyValue('--background-color')
    }
  }

  function handleClick(e) {
    const targetClient = e.target.id
    const content = clientList.find((content) => content.title == targetClient)
    setClientContent(content)
    clientItems.forEach((client) => client.classList.remove('active-client'))
    e.target.classList.add('active-client')
  }

  return (
    <>
      <Layout navigation={props.navigationBody}>
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
          {clientContent.mainImage && (
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
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())

  const clientsQuery = encodeURIComponent(`*[ _type == 'clients']`)
  const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${clientsQuery}]`
  const clients = await fetch(projectURL).then((res) => res.json())
  return {
    props: {
      navigationBody,
      clients,
    },
  }
}
