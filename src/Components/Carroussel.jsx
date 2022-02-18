import React, { useState } from 'react'
import './Carroussel.css'
import { Footer } from './Footer'
import { Question1, Question10, Question11, Question12, Question13, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9 } from './Questionnaire'

function Carroussel() {

    const [current, setCurrent] = useState(0)

    const questionnaire = [
        <Question1/>,
        <Question2/>,
        <Question3/>,
        <Question4/>,
        <Question5/>,
        <Question6/>,
        <Question7/>,
        <Question8/>,
        <Question9/>,
        <Question10/>,
        <Question11/>,
        <Question12/>,
        <Question13/>
    ]
    const length = questionnaire.length

    return (
        <form>
            {questionnaire.map((question, index) => {
                return (
                        <div className={`question-container ${index === current ? 'slide active' : 'slide'}`} key={index}>
                            {question}
                            <Footer length={length} current={current} setCurrent={setCurrent}/>
                        </div>
                    )
                })
            }
        </form>
    )
}

export default Carroussel