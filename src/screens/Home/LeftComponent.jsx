import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/logo.png'

// eslint-disable-next-line
const StyledLeftComponent = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:40%;
    height:100vh;
    background-color:#241f21;

    display:flex;
    justify-content:center;
    align-items:center;
`

const ContentContainer=styled.div`
    text-align:center;
`
const Logo=styled.img`
    width:165px;
    margin-bottom:1rem;
`
const MainHeading=styled.h1`
    font-size:2.5 rem;
    font-weight:700;
    color:#fff;
    margin-bottom:0.75rem;
`
const SubHeading=styled.div`
    font-size:1.75 rem;
    color:#fff;
    margin-bottom:1rem;
`

const AddPlayground=styled.button`
    padding: 0.75rem 1.75rem;
    font-size:1.25rem;
    border-radius:30px;

    span{
        font-size:1.45rem;
        font-weight:700;
    }
    &:hover{
        cursor:pointer;
    }
`
const LeftComponent = () => {
  return (
    <StyledLeftComponent>
        <ContentContainer>
            <Logo src={logo} alt="" />
            <MainHeading>Code Deck</MainHeading>
            <SubHeading>Code. Compile. Develop</SubHeading>
            <AddPlayground><span>+</span> Create New Playground</AddPlayground>
        </ContentContainer>
    </StyledLeftComponent>
  )
}

export default LeftComponent