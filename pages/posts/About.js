import NavBar from "../../components/NavBar.js"
import AboutHopLite from '../../components/About/AboutHopLite.js'
import Advantages from '../../components/About/Advantages.js'
import WhyWeCreated from '../../components/About/WhyWeCreated.js'
import Footer from '../../components/LandingPage/Footer'
import Welcome from '../../components/Welcome'
import Logo from '../../components/Logo'

export default function About() {
  return (
    <div className="about-page">
      <NavBar />
      <Welcome />
      <Logo />
      <h1>About</h1>
      <AboutHopLite />
      <WhyWeCreated />
      <Advantages />
      <Footer />
      
    </div>
  )
}