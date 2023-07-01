import '@/styles/globals.css'
import { Flowbite } from 'flowbite-react';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return <Flowbite theme={{ dark: true }}>
    <Component {...pageProps} />
    <Analytics/>
  </Flowbite>
}
