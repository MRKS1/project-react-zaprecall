import React, { useState } from 'react'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import CARDS from '../mock'

export default function QuestionsList() {
    const [openedCards, setOpenedCards] = useState(0);
    
    return (
        <Container>
            <Header />
            <Content cards={CARDS} openedCards={openedCards} setOpenedCards={setOpenedCards}/>
            <Footer cards={CARDS} openedCards={openedCards}/>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #FB6B6B;
    padding-bottom: 25px;
    margin-bottom: 75px;
`