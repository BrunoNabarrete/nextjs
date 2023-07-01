import Head from 'next/head';
import { Inter } from 'next/font/google';
import GameCards from './components/GameCards'
import WelcomeSection from './components/WelcomeSection'
import Header from './components/Header'
import Footer from './components/Footer'
import VideoChippix from './components/videoChippix'

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
        <Header />
        <WelcomeSection />
        <GameCards />
        <VideoChippix/>
        <Footer />
      </div>
    </>
  )
}
