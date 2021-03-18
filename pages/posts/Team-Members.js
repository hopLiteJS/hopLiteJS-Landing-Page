
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
import Person1 from '../../components/TeamMembers/Person1'
import Person2 from '../../components/TeamMembers/Person2'
import Person3 from '../../components/TeamMembers/Person3'
import Person4 from '../../components/TeamMembers/Person4'
export default function Team_Members() {
  return (
    <div className={"Team_Members"}>
      <NavBar /> 
      <Welcome/>
      <Logo />
      <Person1 />
      <Person2 />
      <Person3 />
      <Person4 />
      <h1>Team-Members</h1>
      <Footer />
    </div>
  )
}