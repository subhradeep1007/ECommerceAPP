import React from 'react'
import styled from 'styled-components'
import { SearchPage } from './SearchBar'
import DropDown from './DropDown'

const Wrapper = styled.div`
  height:30rem;
  background: hsla(210, 100%, 88%, 1);

background: linear-gradient(270deg, hsla(210, 100%, 88%, 1) 0%, hsla(45, 100%, 88%, 1) 100%);

background: -moz-linear-gradient(270deg, hsla(210, 100%, 88%, 1) 0%, hsla(45, 100%, 88%, 1) 100%);

background: -webkit-linear-gradient(270deg, hsla(210, 100%, 88%, 1) 0%, hsla(45, 100%, 88%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C2E1FF", endColorstr="#FFEFC1", GradientType=1 );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const MainText = styled.div`
 color:black;
 font-size: xxx-large;
 font-weight: 400;
 margin-top: 5rem;
`
const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height:4rem;
 width:85%;
 margin-top: 1.5rem;
`
const HeroText = styled.div`
 font-size: 3rem;
 color: white;
 font-weight: 700;
 margin-top: 1.5rem;
 text-align: center;
 
 @media (max-width: 576px){
    font-size: 2.5rem;
 }
 
`

const Hero = () => {
  return (
    <Wrapper>
        <MainText>Efyler</MainText>
        <Container><SearchPage/><DropDown/></Container>
        <HeroText>
            <div>GET START</div>
            <div>YOUR FAVOURITE SHOPING</div>
        </HeroText>  
    </Wrapper>
  )
}

export default Hero