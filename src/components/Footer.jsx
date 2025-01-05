import React from 'react'
import styled from 'styled-components'

export default function Footer({cards, openedCards}) {

  return (
    <Bottom>
      {openedCards}/{cards.length} CONCLUÍDOS
    </Bottom>
  )
}


const Bottom = styled.div`
  height: 70px;
  width: 100vw;
  font-family: "Recursive", serif;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
`;