import React, { useState } from 'react'
import { useCustomHook } from "../../customhooks"
import { Main, Payment, Orders, Profiles } from "../../data/data"

import "./index.css"
export default function SideBar() {

   const [main, setMain] = useCustomHook(false) 
   const [payment, setPayment] = useCustomHook(false) 
   const [order, setOrder] = useCustomHook(false) 
   const [id, setId] = useState(null);




     return (
        <div className="col-md-3 pad-left">
            <div>
                <div className="pad-top d-flex justify-content-left nav-container">
                    <button className="secondary-button">GENERATE INVOICE</button>

                </div>
                <div>
                <div className="">
                    <p className='main nav-container'>Main</p>
                    {Main.map((item, index) => (
                         <div className={id === `${index}-main` ? "d-flex blue-bg cursor-pointer" : "d-flex normal-bg cursor-pointer"} onClick={() => setId(`${index}-main`)}>
                            <img className="nav-side" src={item.image} />
                              <p className="p-0 m-0 d-flex align-items-center sidebar-item">{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className="">
                    <p className='main nav-container'>Payments</p>
                    {Payment.map((item, index) => (
                        <div className={id === `${index}-payment` ? "d-flex blue-bg cursor-pointer" : "d-flex normal-bg cursor-pointer"} onClick={() => setId(`${index}-payment`)}>
                            <img className="nav-side"  src={item.image} />
                            <p className="p-0 m-0 d-flex align-items-center sidebar-item">{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className="">
                    <p className='main nav-container'>Orders</p>
                    {Orders.map((item, index) => (
                       <div className={id === `${index}-order` ? "d-flex blue-bg cursor-pointer" : "d-flex normal-bg cursor-pointer"} onClick={() => setId(`${index}-order`)}>
                            <img className="nav-side" src={item.image} />
                            <p className="p-0 m-0 d-flex align-items-center sidebar-item">{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className="main nav-container">
                    {Profiles.map((item) => (
                       <div className= "d-flex cursor-pointer">
                            <img src={item.image} />
                            <p className="p-0 m-0 d-flex align-items-center sidebar-item" >{item.name}</p>
                        </div>
                    ))}
                </div>
           

                </div>

            </div>
        </div>
    )
}
