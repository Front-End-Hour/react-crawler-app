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
                  <p>About us content</p>
                </Route>
                <Route path="/images">
                  <p>User Content</p>
                </Route>
                <Route path="/">
                  <p>Home Content</p>
                </Route>
              </Switch>
            </div>
          </div>
          <footer className="crawler-footer">
            This is Footer section
        </footer>
        </Router>
      </Container>
    </div>
  );
}

export default App;
