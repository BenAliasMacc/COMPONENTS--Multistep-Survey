import React from 'react'
import './Compteur.css'

const Compteur = ({ length, current}) => {
  return (
    <div className='compteur'>{current + 1} / {length}</div>
  )
}

export default Compteur