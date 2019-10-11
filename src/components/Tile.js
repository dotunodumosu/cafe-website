import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import beans from "../images/coffee_beans.jpg"
import restaurant from "../images/restaurant.jpg"
import coffee_pack from "../images/pack_of_coffee.jpg"

const TileWrapper = styled.div`
  grid-column: ${props => (props.area === "left" ? "1 / 2" : "2 / 3")};
  grid-row: ${props => (props.area === "left" ? "1 / 3" : "span 1")};
  position: relative;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
`

const TileLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-size: ${props => (props.area === "left" ? "2.5rem" : "1.5rem")};
  line-height: ${props => (props.area === "left" ? "2.8rem" : "1.5rem")};
  margin-top: ${props => (props.area === "left" ? "20%" : "15%")};
  padding: 0 ${props => (props.area === "left" ? "25% 0 5%" : "5%")};
  display: block;
  text-align: ${props => (props.area === "left" ? "left" : "right")};
  position: relative;
  z-index: 2;
  transition: color 0.2s ease-in-out;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props =>
    props.area === "left"
      ? `url(${restaurant})`
      : props.area === "top-right"
      ? `url(${beans})`
      : `url(${coffee_pack})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  transition: transform 0.2s ease-in-out;
  :after {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    transition: background-color 0.2s ease-in-out;
  }
  :hover {
    transform: scale(1.05);
  }
  :hover:after {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Tile = ({ children, area }) => {
  return (
    <TileWrapper area={area}>
      <Background area={area} />
      <TileLink area={area} as={Link}>
        {children}
      </TileLink>
    </TileWrapper>
  )
}

export default Tile