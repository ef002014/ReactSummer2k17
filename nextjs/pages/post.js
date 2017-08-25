import Layout from '../components/mylayout.js'
import Markdown from 'react-markdown'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Post =  (props) => (
  <Layout>
    <Head>
      <title>Issa React Project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium}/>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post