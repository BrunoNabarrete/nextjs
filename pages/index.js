import Head from 'next/head'
import { Inter } from 'next/font/google'
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'
import HomePage from './HomePage'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BrotherHood Group</title>
        <meta name="description" content="Maior clube de poker no Brasil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logovetorizada.png" />
      </Head>
      <div className="bg-gray-900">
        <HeaderPage/>
        <HomePage/>
        <FooterPage/>
      </div>
    </>
  )
}
