import '@/styles/globals.css'
import { Flowbite } from 'flowbite-react';

export default function App({ Component, pageProps }) {
  return <Flowbite theme={{ dark: true }}>
    <Component {...pageProps} />
  </Flowbite>
}
