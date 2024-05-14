import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../food-item/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className="food-display" id='food-display'>
      <h2>top dishes near you</h2>

      <div className="food-disply-list">
        {
          food_list.map((item, index) => {

            if (category === 'All' || category === item.category) {
              return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
          })
        }
      </div>
    </div>
  )
}

export default FoodDisplay