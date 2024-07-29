import React, { useEffect } from 'react'
import '../../styles/table.scss'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import {GiArmoredBoomerang} from 'react-icons/gi'
import { getAdminOrders, processOrder } from '../../redux/actions/admin'
import Loader from '../layout/Loader'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'


const Orders = () => {

  const dispatch = useDispatch()
  const {loading, orders,message,error} = useSelector((state)=>state.admin)


  const processHandler = (id)=>{
    dispatch(processOrder(id))
  }


  useEffect(()=>{
    dispatch(getAdminOrders())
    if(message){
      toast.success(message)
      dispatch({type:"clearMessage"})
    }
    if(error){
      toast.success(error)
      dispatch({type:"clearError"})
    }
  },[dispatch,message,error])


  return (
    <section className='tableClass'>
      {
        loading === false ?
        <main>
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>User</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                {orders && orders.map(i=>(
                    <tr key={i}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>{
                      (i.orderItems.cheeseBurger?.quantity || 0) +
                      (i.orderItems.vegCheeseBurger?.quantity || 0) +
                      (i.orderItems.maharajaCheeseBurger?.quantity || 0) +
                      (i.orderItems.macVegBurger?.quantity || 0) +
                      (i.orderItems.burgerWithFries?.quantity || 0) +
                      (i.orderItems.MargheritaPizza?.quantity || 0) +
                      (i.orderItems.VeggiePizza?.quantity || 0) + 
                      (i.orderItems.SupremePizza?.quantity || 0) +
                      (i.orderItems.BBQChickenPizza?.quantity || 0) +
                      (i.orderItems.PepperoniPizza?.quantity || 0) +
                      (i.orderItems.Manchurian?.quantity || 0) +
                      (i.orderItems.HakkaNoodles?.quantity || 0) +
                      (i.orderItems.SpringRolls?.quantity || 0) +
                      (i.orderItems.Chowmein?.quantity || 0) +
                      (i.orderItems.FriedRice?.quantity || 0)}</td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>{i.user?.name || 'Unknown'}</td>
                    <td><Link to={`/order/${i._id}`}><AiOutlineEye /></Link>
                    <button onClick={()=> processHandler(i._id)}><GiArmoredBoomerang /></button>
                    </td>
                </tr>
                ))}

            </tbody>
        </table>
      </main>
      :
      <Loader />
      }
    </section>
  )
}

export default Orders
