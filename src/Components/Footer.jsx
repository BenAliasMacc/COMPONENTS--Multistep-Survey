import React, { useEffect, useRef} from 'react'
import './Footer.css'
import flecheGauche from '../Assets/arrowLeft.svg'
import flecheDroite from '../Assets/arrowRight.svg'
import Compteur from './Compteur'

export const Footer = ({ length, current, setCurrent }) => {

    const nextQuestion = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevQuestion = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const buttonLeft = useRef();
    useEffect(() => {
      current === 0 ? (buttonLeft.current.style.visibility = 'hidden') : (buttonLeft.current.style.visibility = 'initial')
    }, [current])
    

  return (
    <div className='question-footer'>
        <div ref={buttonLeft} type='button' className='prev' onClick={prevQuestion}>
            <img className='arrow arrow-left' src={flecheGauche} alt='fleche vers la gauche'/>
            <p>Precedent</p>
        </div>

        <Compteur length={length} current={current}/>

        {
            current === length - 1 ? (
                <button type='submit' className='submit-form'>
                    <p>Soumettre</p>
                </button>
            ) : (
                <div type='button' className='next' onClick={nextQuestion}>
                    <p>Suivant</p>
                    <img className='arrow arrow-right' src={flecheDroite} alt='fleche vers la Droite'/>
                </div>
            )
        }
    </div>
  )
}