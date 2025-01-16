import React, { useState } from 'react'
import play from "../assets/seta_play.png"
import wrong from "../assets/icone_erro.png"
import middle from "../assets/icone_quase.png"
import right from "../assets/icone_certo.png"
import virar from "../assets/seta_virar.png"
import styled from 'styled-components'


export default function Question({ cards, openedCards, setOpenedCards }) {
  const [clicked, setClicked] = useState([]);
  const [clickedQuestion, setClickedQuestion] = useState([]);
  const [clickedAnswer, setClickedAnswer] = useState([]);
  const [clickedFinal, setClickedFinal] = useState([]);
  const [finalColor, setFinalColor] = useState([]);
  const [finalIcon, setFinalIcon] = useState([]);
  const colorWrong = "#FF3030";
  const colorMiddle = "#FF922E";
  const colorRight = "#2FBE34";


  function initialClick(props) {
    setClicked([...clicked, props]);
    setClickedQuestion([...clickedQuestion, props]);
  }

  function secondClick(props) {
    const newClickItems = clickedQuestion.filter((newList) => newList !== props);

    setClickedQuestion(newClickItems);
    setClickedAnswer([...clickedAnswer, props]);

  }

  function thirdClick(props, color, icon) {
    setFinalColor((finalColor) => ({ ...finalColor, [props]: color }));
    setFinalIcon((finalIcon) => ({ ...finalIcon, [props]: icon }));
    setClickedAnswer([]);
    setClickedFinal([...clickedFinal, props]);
    setOpenedCards(openedCards + 1);

  }

  return (
    <div className="cardQuestion">
      {cards.map(c =>
        <div key={c.id}>
          <BoxQuestionLabel display={`${clicked.includes(c.id) ? "none" : "flex"} `}>
            <p>Pergunta {c.id}</p>
            <img src={play} onClick={() => initialClick(c.id)} />
          </BoxQuestionLabel>

          <BoxQuestion display={`${clickedQuestion.includes(c.id) ? "block" : "none"} `}>
            <p>{c.question}</p>
            <img src={virar} onClick={() => secondClick(c.id)} />
          </BoxQuestion>

          <BoxAnswer display={`${clickedAnswer.includes(c.id) ? "block" : "none"} `}>
            <div>
              <p>{c.answer}</p>
            </div>
            <Options>
              <Option color={colorWrong} onClick={() => thirdClick(c.id, colorWrong, wrong)}>
                <p>Não lembrei</p>
              </Option>
              <Option color={colorMiddle} onClick={() => thirdClick(c.id, colorMiddle, middle)}>
                <p>Quase não lembrei</p>
              </Option>
              <Option color={colorRight} onClick={() => thirdClick(c.id, colorRight, right)}>
                <p>Zap!</p>
              </Option>
            </Options>
          </BoxAnswer>

          <BoxQuestionFinished color={finalColor[c.id]} display={`${clickedFinal.includes(c.id) ? "flex" : "none"} `}>
            <p>Pergunta {c.id}</p>
            <img src={finalIcon[c.id]} />
          </BoxQuestionFinished>
        </div>
      )
      }
    </div>
  )
}



const BoxQuestionLabel = styled.div`
  height: 45px;
  font-family: "Recursive", serif;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  margin: 25px;
  padding: 25px;
  border-radius: 8px;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  img:hover {
    cursor: pointer;
  }
`;

const BoxQuestion = styled.div`
  min-height: 100px;
  font-family: "Recursive", serif;
  font-size: 20px;
  font-weight: 400;
  background-color: #FFFFD4;
  margin: 25px;
  padding: 25px;
  border-radius: 8px;
  display: ${props => props.display};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  p {
    text-align: left;
  }
  img {
    width: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const BoxAnswer = styled.div`
  min-height: 100px;
  font-family: "Recursive", serif;
  font-size: 20px;
  font-weight: 400;
  background-color: #FFFFD4;
  margin: 25px;
  padding: 25px;
  border-radius: 8px;
  display: ${props => props.display};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Options = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 25px;
`;

const Option = styled.div`
  height: 50px;
  width: 33%;
  font-size: 15px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const BoxQuestionFinished = styled.div`
  height: 45px;
  font-family: "Recursive", serif;
  font-size: 20px;
  font-weight: 700;
  text-decoration: line-through;
  background-color: white;
  color: ${props => props.color};
  margin: 25px;
  padding: 25px;
  border-radius: 8px;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
`;