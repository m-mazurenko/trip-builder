import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.css';
import '../styles/date-picker.scss';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
