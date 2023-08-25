import React from 'react'
import flixua from '../image/FLIXUA.png'
import PlanSelection from '../components/PlanSelection';
import './PlanSelectionPage.css'


const PlanSelectionPage = () => {
  return (
    <div>
       <div>
        <img className='img' src={flixua} alt=""></img>
        <PlanSelection/>
      </div>
    </div>
  )
}

export default PlanSelectionPage
