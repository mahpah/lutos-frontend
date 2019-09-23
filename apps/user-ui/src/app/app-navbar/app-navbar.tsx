import React from 'react'

import './app-navbar.scss'
import { Navbar, Container, NavbarBrand, UncontrolledCollapse, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

/* eslint-disable-next-line */
export interface AppNavbarProps {}

export const AppNavbar = (props: AppNavbarProps) => {
  return (
    <Navbar className="bg-primary main-nav" expand="lg">
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
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/library">My library</Link>
            </NavItem>
          </Nav>
          <div className="ml-auto search-box d-flex align-items-center">
            <input type="text" tabIndex={1} className="search" placeholder="Search..."/>
            <i className="fal fa-search"></i>
          </div>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
