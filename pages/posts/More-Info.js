
import SingleBlogPost from "../../components/BlogPosts/SingleBlogPost"
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Welcome from '../../components/Welcome'
import Logo from '../../components/Logo'
import WhyHopLite from '../../components/LandingPage/WhyHopLite'
import ExampleCode from '../../components/LandingPage/ExampleCode'
import GetStarted from '../../components/LandingPage/GetStarted'
import ContactUs from '../../components/LandingPage/ContactUs'
import Footer from '../../components/LandingPage/Footer'
import Image from 'next/image'
import FAQ from '../../components/MoreInfo/FAQ'
import Examples from '../../components/MoreInfo/Examples'
import YoutubeTutorial from '../../components/MoreInfo/YoutubeTutorial'
import ContactUsMoreInfo from '../../components/MoreInfo/ContactUs'
export default function More_Info() {
  return (
    <div className="More_Info">
       <NavBar /> 
      <Welcome/>
      <Logo />
      <FAQ />
      <Examples />
      <ContactUsMoreInfo />
      <YoutubeTutorial />
      <h1>Team-Members</h1>
      <Footer />
    </div>
  )
}