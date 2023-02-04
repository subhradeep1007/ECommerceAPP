import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
 width:100%;
 margin: auto;
 display:flex;
 justify-content: center;
 align-items: center;
 background-color: black;
 color:white;
 position: absolute;
 top: 0;
 z-index: 12;
 overflow: hidden;
    @media (max-width: 576px){
    font-size:0.6rem;
 }
 
`
const NavBarData = [
    'Best Sellers','Gift Ideas','New Releases',"Today's Deals",'Customer Service'
]

const NavBarButton = styled.button`
 color:white;
 all: unset;
  cursor: pointer;
  margin:1rem;
  
   @media (max-width: 576px){
    margin:0.3rem
 }
 
` 

const Navbar = () => {
  return (
    <Wrapper>{
        NavBarData.map((item,key)=>{
            return <NavBarButton>{item}</NavBarButton>
        })}
    </Wrapper>
  )
}

export default Navbar