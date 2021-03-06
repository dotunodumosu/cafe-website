import React from "react"
import styled from "styled-components"
import CustomLink from "./CustomLink"
import Img from "gatsby-image"

const ProductWrapper = styled.div`
  margin-left: ${props => (props.position === "left" ? "0" : "17%")};
  width: 75vw;
  height: 45vw;
  min-height: 800px;
  position: relative;
  margin-bottom: 100px;
  :after {
    content: "";
    display: block;
    width: 65vw;
    height: 30vw;
    position: absolute;
    bottom: -40px;
    ${props => (props.position === "left" ? "right: -40px" : "left: -40px")};
    background: linear-gradient(
      90deg,
      ${props => props.gradient} 0%,
      ${props => props.gradient} 100%
    );
    z-index: -1;
  }
  @media (max-width: 1100px) {
    min-height: 600px;
    width: 100%;
    margin-left: 0;
    margin-bottom: 400px;
    :after {
      width: 100%;
      left: 40px;
      right: -40px;
    }
  }
  @media (max-width: 850px) {
    margin-bottom: 320px;
    min-height: 400px;
    :after {
      left: 20px;
      right: -20px;
      bottom: -20px;
    }
  }
  @media (max-width: 600px) {
    min-height: 300px;
    :after {
      display: none;
    }
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`

const InfoBox = styled.div`
  position: absolute;
  width: 500px;
  min-height: 600px;
  background-color: white;
  padding: 65px;
  top: -25%;
  transition: transform 0.2s ease-in-out;
  transform: translateY(50%);
  ${props => (props.position === "left" ? "right: -250px" : "left: -250px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 2.2rem;
    text-transform: uppercase;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2.2rem;
  }
  @media (max-width: 1500px) {
    ${props => (props.position === "left" ? "right: -15%" : "left: -15%")};
  }
  @media (max-width: 1100px) {
    width: 80%;
    ${props => (props.position !== "left" ? "right: -20%" : "left: -20%")};
    top: 0;
    transform: translateY(55%)
      ${props =>
        props.position === "left" ? "translateX(40%)" : "translateX(30%)"};
  }
  @media (max-width: 850px) {
    transform: translateY(45%)
      ${props =>
        props.position === "left" ? "translateX(40%)" : "translateX(30%)"};
    min-height: 400px;
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1.6rem;
    }
  }
  @media (max-width: 600px) {
    width: 90%;
    transform: translateY(35%)
      ${props =>
        props.position === "left" ? "translateX(27.5%)" : "translateX(22.5%)"};
    padding: 40px 30px;
  }
`

const ProductBox = ({ image_src, gradient, text_data, position }) => {
  return (
    <ProductWrapper position={position} gradient={gradient}>
      <Photo as={Img} fluid={image_src} />
      <InfoBox position={position}>
        <h2>{text_data.title}</h2>
        <p>{text_data.paragraph}</p>
        <CustomLink to="/fair-trade">Read more</CustomLink>
      </InfoBox>
    </ProductWrapper>
  )
}

export default ProductBox
