import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'
import Logo from '../components/Logo'
import WhyHopLite from '../components/LandingPage/WhyHopLite'
import ExampleCode from '../components/LandingPage/ExampleCode'
import GetStarted from '../components/LandingPage/GetStarted'
import ContactUs from '../components/LandingPage/ContactUs'
import Footer from '../components/LandingPage/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HopLiteJS</title>

      </Head>
      <div>
      <NavBar /> 
      <Welcome/>
      <Logo />
      <WhyHopLite />
      <ExampleCode />
      <GetStarted />
      <ContactUs />
      </div> 
      <main >
      
      
      </main>

      <footer >
       <Footer />
      </footer>
    </div>
  )
}
