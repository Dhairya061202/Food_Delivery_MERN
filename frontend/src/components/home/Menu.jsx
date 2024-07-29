import React from 'react'
import '../../styles/menu.css'
import MenuCart from './MenuCart'
import {useDispatch} from 'react-redux'
import toast from 'react-hot-toast'


const Menu = ({data}) => {

  const dispatch = useDispatch()


  const addToCartHandler = (itemNum)=>{
    switch (itemNum) {
      case 1:
        dispatch({type:"cheeseBurgerIncrement"});
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart")
        break;
      case 6:
        dispatch({type:"MargheritaPizzaIncrement"});
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart")
        break;
      case 10:
        dispatch({type:"PepperoniPizzaIncrement"});
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart")
        break;      
      case 13:
        dispatch({type:"SpringRollsIncrement"});
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart")
        break;      
    
      default:
        dispatch({type:"cheeseBurgerIncrement"});
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart")
        break;
    }
  }

  return (
    
    <section id='menu'>
      {console.log(data)}
      <h1>MENU</h1>
      <div>
        {data.map((item) => (
        <MenuCart
          
          itemNum={item.itemNum}
          foodSrc={item.foodSrc}
          price={item.price}
          title={item.title}
          handler={addToCartHandler}
        />
      ))}

      </div>
    </section>
  )
}

export default Menu
