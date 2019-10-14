import React from "react"
import styled from "styled-components"
import Button from "../components/Button"

const ProductWrapper = styled.div`
  width: 75vw;
  height: 45vw;
  position: relative;
  :after {
    content: "";
    display: block;
    width: 65vw;
    height: 30vw;
    position: absolute;
    bottom: -40px;
    right: -40px;
    background: linear-gradient(
      90deg,
      ${props => props.gradient} 0%,
      ${props => props.gradient} 100%
    );
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoBox = styled.div`
  position: absolute;
  width: 30vw;
  height: 34vw;
  background-color: white;
  padding: 65px;
  top: -25%;
  transform: translateY(50%);
  right: -15vw;
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
`

const ProductBox = ({ image_src, gradient, text_data }) => {
  return (
    <ProductWrapper gradient={gradient}>
      <Photo src={image_src} />
      <InfoBox>
        <h2>{text_data.title}</h2>
        <p>{text_data.paragraph}</p>
        <Button>{text_data.button}</Button>
      </InfoBox>
    </ProductWrapper>
  )
}

export default ProductBox
