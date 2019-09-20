import React from 'react'

import './app-navbar.scss'
import { Navbar, Container, NavbarBrand, UncontrolledCollapse, Nav, NavItem, NavLink } from 'reactstrap'

/* eslint-disable-next-line */
export interface AppNavbarProps {}

export const AppNavbar = (props: AppNavbarProps) => {
  return (
    <Navbar className="bg-primary" expand="lg">
      <Container>
        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
          Lutos
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
  )
}

export default AppNavbar
