import React from 'react'
import play from "../assets/seta_play.png"
import styled from 'styled-components'

export default function Question(props) {
  const { cards } = props;

  return (
    <ul>
      {cards.map((c, index) => 
            <BoxQuestion key={index}>
            <p>Pergunta {index + 1}</p>
            <img src={play} />
          </BoxQuestion>
      )}
    </ul>
  )
}

const BoxQuestion = styled.li`
  height: 45px;
  font-family: "Recursive", serif;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  margin-top: 25px;
  margin-left: 37px;
  margin-right: 37px;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2)

`
