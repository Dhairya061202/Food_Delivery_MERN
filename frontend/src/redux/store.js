import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './reducers/userReducer'
import { cartReducer, orderReducer, ordersReducer } from './reducers/cartReducer'
import { adminReducer } from './reducers/adminReducer'
 
export const store = configureStore({
    reducer: {
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        orders:ordersReducer,
        admin:adminReducer
    },
})

export const server = "https://food-delivery-backend-i2jn.onrender.com/api/v1"