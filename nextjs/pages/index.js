import Layout from '../components/mylayout.js'
import CardHold from '../components/cardHold.js'
import Head from 'next/head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
  <Layout>

    <Head>
      <title>The Summer Experience</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"/>
    </Head>

    <div>
      <br />
      <MuiThemeProvider>
        <CardHold />
      </MuiThemeProvider>
    </div>

  </Layout>


)