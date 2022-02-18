import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';

export const siteTitle = 'Trip builder website';

interface LayoutProps {
  children: JSX.Element | JSX.Element[],
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW='container.lg'>
        {children}
      </Container>
    </div>
  )
}
