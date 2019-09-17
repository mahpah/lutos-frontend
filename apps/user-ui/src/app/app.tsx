import React from 'react'
import {
  Container,
  Row,
  Col,
  Alert,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  UncontrolledCollapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import './app.scss'

import { Route, Link } from 'react-router-dom'

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div>
      <Navbar className="bg-primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Navbar w/ text
          </NavbarBrand>
          <button className="navbar-toggler" id="navbarText" type="button">
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbarText">
            <Nav className="mr-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Pricing
                </NavLink>
              </NavItem>
            </Nav>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Alert color="primary">This is a primary alert—check it out!</Alert>
            <span>1 of 2</span>
          </Col>
          <Col>
            <span>2 of 2</span>4
            <UncontrolledDropdown>
              <DropdownToggle caret data-toggle="dropdown">
                Dropdown button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
      </Container>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  )
}

export default App
