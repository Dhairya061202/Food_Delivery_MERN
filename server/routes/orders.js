import express from 'express';
import { authorizeAdmin, isAuthenticated } from '../middleware/auth.js';
import { createOrder, createOrderOnline, getAdminOrders, getMyOrder, getOrderDetails, paymentVerfication, processOrder } from '../controllers/orders.js';


const router = express.Router();

router.post("/createorder" ,isAuthenticated, createOrder)

router.post("/createorderonline",isAuthenticated, createOrderOnline)

router.post("/paymentVertification",isAuthenticated, paymentVerfication)

router.get("/myorders", isAuthenticated ,getMyOrder)

router.get("/order/:id", isAuthenticated ,getOrderDetails)

router.get("/admin/orders", isAuthenticated ,authorizeAdmin,getAdminOrders)

router.get("/admin/order/:id", isAuthenticated ,authorizeAdmin,processOrder)



export default router