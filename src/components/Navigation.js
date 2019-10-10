import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavWrapper = styled.nav`
  display: flex;
`
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
`

const NavItem = styled.li`
  list-style: none;
  margin: 0 0 0 30px;
  a {
    text-decoration: none;
    font-family: "Lato", sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.17em;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: -3px;
      left: 0;
      background-color: #000;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`

const Navigation = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <Link>Our mission</Link>
        </NavItem>
        <NavItem>
          <Link>Our cafe</Link>
        </NavItem>
        <NavItem>
          <Link>Our coffee</Link>
        </NavItem>
        <NavItem>
          <Link>Our food</Link>
        </NavItem>
        <NavItem>
          <Link>Shop</Link>
        </NavItem>
      </NavList>
    </NavWrapper>
  )
}

export default Navigation
