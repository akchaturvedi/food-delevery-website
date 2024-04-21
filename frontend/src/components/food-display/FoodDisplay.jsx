import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = () => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className="food-displat" id='food-display'>
        <h2>top dishes near you</h2>
    </div>
  )
}

export default FoodDisplay