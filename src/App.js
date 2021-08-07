import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Jumbotron from './components/Jumbotron';
import Items from './components/Items';
import Detail from './components/Detail';
import classes from './App.module.css';

import Data from './db/data';

export default function App() {
  const [shoes, setShoes] = useState(Data);

  function moreInfoHandler() {
    axios
      .get(`https://codingapple1.github.io/shop/data2.json`)
      .then((res) => {
        setShoes([...shoes, ...res.data]);
      })
      .catch(() => {
        console.log('failed');
      });
  }

  return (
    <div className={classes.app}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">WS Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.link}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <Items shoes={shoes} />
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        {/* <Route path="/:id">
          <div>아무거나</div>
        </Route> Switch 사용했을 때 차이점 배움 */}
      </Switch>
      <button className="btn btn-primary" onClick={moreInfoHandler}>
        More
      </button>
    </div>
  );
}
