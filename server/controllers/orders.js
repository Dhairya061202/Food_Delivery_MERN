import { Order } from "../models/Orders.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import {instance} from '../server.js'
import crypto from 'crypto'
import {Payment} from '../models/Payment.js'



export const createOrder = async (req, res, next) => {
  try {
    console.log('User:', req.user);
    const {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
    } = req.body;

    const user = req.user._id;
    console.log('User ID:', user);
    

    await Order.create({
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
      user,
    });

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully via Cash On Delivery",
    });
  } catch (error) {
    console.log(error);
  }
};

export const createOrderOnline = async (req, res, next) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
    } = req.body;

    const user = req.user._id;

    const orderOption = {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
      user,
    };

    const options = {
      amount: Number(totalAmount) * 100,
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    res.status(201).json({
      success: true,
      order,
      orderOption
    });
  } catch (error) {
    console.log(error);
  }
};


export const paymentVerfication = async(req,res,next)=>{
    try {

        const {razorpay_payment_id,razorpay_order_id,razorpay_signature,orderOption} = req.body

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_API_SECRET).update(body).digest("hex");


        const isAuthentic = expectedSignature === razorpay_signature;

        if(isAuthentic){
            const payment = await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature

            }) 

            await Order.create({
                ...orderOption,
                paidAt:new Date(Date.now()),
                paymentInfo:payment._id
            })

            res.status(201).json({
                sucess:true,
                message:`order placed succesfully, Payment ID: ${payment._id}`
            })
        }
        else{
            return next(new ErrorHandler("payment failed", 400))
        }
        
    } catch (error) {
        console.log(error)
    }
}



export const getMyOrder = async (req, res, next) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).populate("user", "name");

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOrderDetails = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name");

    if (!order) {
      return next(new ErrorHandler("Invalid order id", 404));
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate("user", "name");

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);
  }
};

export const processOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return next(new ErrorHandler("Invalid order id", 404));
    }

    if (order.orderStatus === "Preparing") {
      order.orderStatus = "Shipped";
    } else if (order.orderStatus === "Shipped") {
      order.orderStatus = "Delivered";
      order.deliveredAt = new Date(Date.now());
    } else if (order.orderStatus === "Delivered") {
      return next(new ErrorHandler("Food Already Deliverd", 400));
    }

    await order.save();

    res.status(200).json({
      success: true,
      message: "status Update",
    });
  } catch (error) {
    console.log(error);
  }
};
