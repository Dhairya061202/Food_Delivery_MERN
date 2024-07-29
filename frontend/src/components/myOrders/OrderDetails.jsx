import React, { useEffect } from 'react'
import '../../styles/orderDetails.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../../redux/actions/order'
import { useParams } from 'react-router-dom'
import Loader from '../layout/Loader'


const OrderDetails = () => {

    const params = useParams()

    const {order,loading} = useSelector(state=>state.orders)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOrderDetails(params.id))
    },[dispatch,params.id])


  return (
    <section className='orderDetails'>
      {
        loading === false && order !== undefined ?
        <main>
        <h1>Order Details</h1>

        <div>
            <h1>Shipping</h1>
            <p><b>Address</b>
                {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode}`}
            </p>
        </div>

        <div>
            <h1>Contact</h1>
            <p><b>Name</b>
                {order.user.name}
            </p>
            <p><b>Phone </b>
                {`${order.shippingInfo.phoneNo}`}
            </p>
        </div>

        <div>
            <h1>Status</h1>
            <p><b>Order Status</b>
                {order.orderStatus}
            </p>
            <p><b>Placed At</b>
                {order.createdAt.split("T")[0]}
            </p>
            <p><b>Delivery At</b>
                {order.deliveredAt?order.createdAt.split("T")[0]:"NA"}
            </p>
        </div>


        <div>
            <h1>Payment</h1>
            <p><b>Order Status</b>
                {order.orderStatus}
            </p>
            <p><b>Payment Method</b>
                {order.paymentMethod}
            </p>
            <p><b>Payment Reference</b>
                {order.paymentMethod === "Online" ? `#${order.paymentInfo}`: "NA"}
            </p>
            <p><b>Paid At</b>
            {order.paymentMethod === "Online" ? order.paidAt.split("T")[0]:"NA"}
            </p>
        </div>


        <div>
            <h1>Amount</h1>
            <p><b>Items Total</b>
               ₹{order.itemsPrice}
            </p>
            <p><b>Shipping Charges</b>
               ₹{order.shippingCharges}
            </p>
            <p><b>Tax</b>
               ₹{order.taxPrice}
            </p>
            <p><b>Total Amount</b>
               ₹{order.totalAmount}
            </p>
            
        </div>

        {/* <article>
            <h1>Ordered items</h1>
            <div>
                <h4>chessse burger</h4>
                <div>
                    <span>{2}</span> X <span>{232}</span>
                </div>
            </div>


            <div>
                <h4>veg chessse burger</h4>
                <div>
                    <span>{20}</span> X <span>{132}</span>
                </div>
            </div>

            <div>
                <h4> burger</h4>
                <div> 
                    <span>{14}</span> X <span>{122}</span>
                </div>
            </div>

            <div>
                <h4 style={{fontWeight:"800"}}>Sub Total</h4>
                <div style={{fontWeight:"800"}}>₹{1231}</div>
            </div>

        </article> */}

      </main>
      :
      <Loader/>
      }
    </section>
  )
}

export default OrderDetails
