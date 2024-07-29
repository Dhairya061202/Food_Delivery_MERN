import React from 'react'
import '../../styles/profile.scss'
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/user'
import Loader from '../layout/Loader'

const Profile = () => {

  const dispatch = useDispatch();
  const { loading, user } = useSelector(state => state.auth)
  
  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <section className='profile'>
      {loading === false ? (
        <main>
          {user?.photo && <img src={user.photo} alt="user" />}
          {user?.name && <h5>{user.name}</h5>}

          {user?.role === "admin" && (
            <div>
              <Link to='/admin/dashboard' style={{ backgroundColor: "black" }}><MdDashboard /> Dashboard</Link>
            </div>
          )}

          <div>
            <Link to='/myorders'>Orders</Link>
          </div>

          <button onClick={logoutHandler}>Logout</button>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  )
}

export default Profile
