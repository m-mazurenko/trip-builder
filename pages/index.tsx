import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import Trips from '../components/Trips';
import { Button, Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Box mt={3}>
          <Link href="/posts/create">
            <Button colorScheme='blue'>Add New Trip</Button>
          </Link>
        </Box>
        <Trips />
      </section>
    </Layout>
  )
}

export default Home
