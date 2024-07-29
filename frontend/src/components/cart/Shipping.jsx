import React, { useState } from "react";
import "../../styles/shipping.scss";
import { Country, State } from "country-state-city";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

const Shipping = () => {

  


  const [hNo, setHNo] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pinCode, setPinCode] = useState("");

  const dispatch = useDispatch()  
  const navigate = useNavigate()  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
        type:"addShippingInfo",
        payload:{hNo,city,state,country,pinCode,phoneNo}
    })
    localStorage.setItem("shippingInfo",JSON.stringify(hNo,city,state,country,pinCode,phoneNo))
    navigate("/confirmOder")
  };

  return (
    <section>
      <div className="shipping">
        <main>
          <h1>Shipping Details</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter House No."
                value={hNo} required
                onChange={(e) => setHNo(e.target.value)}
              />
            </div>

            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="Enter City"
                value={city} required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <label>Country</label>
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <label>State</label>
                <select
                required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((i) => (
                      <option value={i.isoCode} key={i.isoCode}>
                        {i.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <div>
              <label>Pin Code</label>
              <input
                type="number"
                placeholder="Enter Pincode"
                value={pinCode}
                required
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <label>Phone No.</label>
              <input
                type="number"
                placeholder="Enter Phone No."
                value={phoneNo}
                required
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

            <button type='submit'>Confirm Order</button>
            {/* <Link to="/confirmOder">Confirm Order</Link> */}
          </form>
        </main>
      </div>
    </section>
  );
};

export default Shipping;
