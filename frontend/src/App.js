import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss'
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import MenuCategory from './components/layout/MenuCategory';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Myorders from './components/myOrders/Myorders';
import OrderDetails from './components/myOrders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';
import Loader from './components/layout/Loader';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { loadUser } from './redux/actions/user';
import toast,{Toaster} from 'react-hot-toast'
import {ProtectedRoute} from 'protected-route-react'


function App() {

  const dispatch = useDispatch()
  const { error,message,isAuthenticated ,user} = useSelector(state=>state.auth)

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({
        type:"clearError",
      })
    }
    if(message){
      toast.success(message)
      dispatch({
        type:"clearMessage",
      })
    }
    
  },[dispatch,error,message])

  return (
   <BrowserRouter>
    <Header isAuthenticated={isAuthenticated} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pizza' element={<MenuCategory category="pizza" />} />
      <Route path='/burger' element={<MenuCategory category="burger" />} />
      <Route path='/chinese' element={<MenuCategory category="chinese" />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />


      <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me"><Login /></ProtectedRoute>} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>


      <Route path='/me' element={<Profile  />} />
      <Route path='/shipping' element={<Shipping />} />
      <Route path='/confirmOder' element={<ConfirmOrder />} />
      <Route path='/myorders' element={<Myorders />} />
      <Route path='/myorders/:id' element={<OrderDetails />} />


      </Route>
     
      
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === "admin"} redirectAdmin="/me" />}>
      
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/user' element={<Users />} />
      <Route path='/admin/orders' element={<Orders />} />
      <Route path='/order/:id' element={<OrderDetails />} />

      </Route>
      




      <Route path='*' element={<Loader />} />
    </Routes>
    {/* <Footer /> */}
    <Toaster />
   </BrowserRouter>
  );
}

export default App;
