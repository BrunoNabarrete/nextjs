import Header from "./components/Header"
import Footer from "./components/Footer"
import WelcomeSection from "./components/WelcomeSection"
import VideoChippix from "./components/videoChippix"
import GameCards from "./components/GameCards"

export default function HoursPage() {
  return (
    <div className="bg-gray-900">
    <Header />
    <WelcomeSection />
    <VideoChippix/>
    <GameCards />
    <Footer />
  </div>
  )
}