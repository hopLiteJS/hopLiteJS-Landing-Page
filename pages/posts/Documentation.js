import NavBar from '../../components/NavBar.js';
import Footer from '../../components/LandingPage/Footer';
import Welcome from '../../components/Welcome';
import Logo from '../../components/Logo';
import LinksToParts from '../../components/Documentation/LinksToParts';
import LinkToDocumentation from '../../components/Documentation/LinkToDocumentation';
import DocumentationInfo from '../../components/Documentation/DocumentationInfo';
import Hooked from '../../components/Documentation/ReactHooks';

export default function Documentation() {
  return (
    <div className={"Documentation"}>
  <NavBar />
      <Welcome />
      <Logo />
      <h1>Documentation</h1>
      <LinkToDocumentation />
      <LinksToParts />
      <DocumentationInfo />
      <Hooked />
      <Footer />
      
    </div>
  )
}