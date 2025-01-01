import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price, description, image}) => {
    
    const {cartItem, addToCart, removeFromCart,url} = useContext(StoreContext)



  return (
    <div className='food_item'>
        <div className="food_item_img_container">
            <img src={url+"/images/"+image} alt="" className="food_item_image" />
            {!cartItem[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :
                <div className='food_item_counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

                </div>

            }
        </div>
        <div className="food_item_info">
            <div className="food_item_name_rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food_item_dec'>{description}</p>
            <p className='food_item_price'>${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
