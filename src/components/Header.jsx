import React from 'react'
import logo from "../assets/logo.png"
import styled from 'styled-components'

export default function Header() {
    return (
        <Container>
            <Logo src={logo} />
            <p>ZapRecall</p>
        </Container>
    )
}


const Container = styled.div`
    height: 153px;
    font-family: "Righteous", serif;
    font-size: 42px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 60px;
    width: 52px;
    margin-right: 15px;
`;