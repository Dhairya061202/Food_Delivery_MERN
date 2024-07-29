import React, { useEffect } from 'react'
import '../../styles/table.scss'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getMyOrder } from '../../redux/actions/order'
import Loader from '../layout/Loader'
import toast from 'react-hot-toast'

const Myorders = () => {

    const {orders,loading,error}= useSelector(state=>state.orders)

    const dispatch = useDispatch()

    useEffect(()=>{

      if(error){
        toast.error(error)
        dispatch({type:"clearError"})
      }

      dispatch(getMyOrder())
    },[dispatch,error])

    

  return (
    <section className='tableClass'>
      {
        loading===true?<Loader/>:
        <main>
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                {orders && orders.map(i=>(
                    <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>{
                      i.orderItems.cheeseBurger.quantity+
                      i.orderItems.vegCheeseBurger.quantity+
                      i.orderItems.maharajaCheeseBurger.quantity+
                      i.orderItems.macVegBurger.quantity+
                      i.orderItems.burgerWithFries.quantity+
                      i.orderItems.MargheritaPizza.quantity+
                      i.orderItems.VeggiePizza.quantity+ 
                      i.orderItems.SupremePizza.quantity+
                      i.orderItems.BBQChickenPizza.quantity+
                      i.orderItems.PepperoniPizza.quantity+
                      i.orderItems.Manchurian.quantity+
                      i.orderItems.HakkaNoodles.quantity+
                      i.orderItems.SpringRolls.quantity+
                      i.orderItems.Chowmein.quantity+
                      i.orderItems.FriedRice.quantity}</td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td><Link to={`/myorders/${i._id}`}><AiOutlineEye /></Link></td>
                </tr>
                ))}

            </tbody>
        </table>
      </main>
      }
    </section>
  )
}

export default Myorders
