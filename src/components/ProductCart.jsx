import React from 'react'
import { Link } from 'react-router-dom';
import iconCart from '../assets/iconCart.png'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
export const ProductCart = (props) => {
  const carts =  useSelector(store =>store.cart.item)
  const {id,name,price,image,slug}=props.data;
  const dispatch =useDispatch()
  const handleAddtoCart=()=>{
    dispatch(addToCart({
      productId:id,
      quantity:1
    }))
  }
  return (
    <div className='bg-gray-200 rounded-2xl p-5'>
      <Link to={slug}>
        <img src={image} alt="" className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007] rounded-xl' />
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <div className='flex justify-between items-center'>
          <p>
            $<span className='text-2xl font-medium'>{price}</span>
          </p>
          <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-500 flex gap-2' onClick={handleAddtoCart}>
            <img src={iconCart} alt="" className='w-5'/>
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  )
}
