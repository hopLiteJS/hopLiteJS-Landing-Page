import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HopLiteJS</title>
       

        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">HopLite-JS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Documentation</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/oslabs-beta/hoplitejs">HopLite.js!</a> <img
        src="/hopLiteLogo.png"
        alt="Picture of the author"
        width={70}
        height={70}
      />
        </h1>

        <p className={styles.description}>
          An Easy To Use Authentican and Authorization Library- {' '}
          <code className={styles.code}><a href="https://github.com/oslabs-beta/hoplitejs">HopLite.js!</a></code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/oslabs-beta/hoplitejs/blob/main/README.md" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about HopLiteJs features</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about HopLite.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy integratable boilerplates into projects with HopLite.js helper functions</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Contact Us &rarr;</h3>
            <p>
              Contact the team for technical support, questions, and suggested improvements.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
         
        >
          Created And Designed By:
          Reuben Kirsh, Maxwell Reed, Ted Min, Karin Illesova
          
        </a>
      </footer>
    </div>
  )
}
