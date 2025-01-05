import React from 'react'
import Question from './Question'


export default function Content({ cards, openedCards, setOpenedCards}) {
    
    return (
    <div>
        <Question cards={cards} openedCards={openedCards} setOpenedCards={setOpenedCards}/>
    </div>
    )
}