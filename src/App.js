import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from 'react-bootstrap';

import HomePage from './components/home-page/home-page';
import ImageCrawler from './components/image-crawler/image-crawler';
import LinkCrawler from './components/link-crawler/link-crawler';

function App() {
  return (
    <div className="crawler-app">
      <Container>
        <Router>
          <header>
            <Navbar bg="dark" variant="dark">
              <div className="nav-links-holder">
                <Navbar.Brand>React Crawler App</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link><Link className="nav-link" to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link className="nav-link" to="/images">Image Crawler</Link></Nav.Link>
                  <Nav.Link><Link className="nav-link" to="/links">Link Crawler</Link></Nav.Link>
                </Nav>
              </div>
              <Form inline className="nav-form-control search-box-form">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar>
          </header>
          <div className="wrapper">
            <div>
              <Switch>
                <Route path="/links">
                  <LinkCrawler></LinkCrawler>
                </Route>
                <Route path="/images">
                  <ImageCrawler></ImageCrawler>
                </Route>
                <Route path="/">
                  <HomePage></HomePage>
                </Route>
              </Switch>
            </div>
          </div>
          <footer className="crawler-footer">
            copyright @2021 McKumar
          </footer>
        </Router>
      </Container>
    </div>
  );
}

export default App;
