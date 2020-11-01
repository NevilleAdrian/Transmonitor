import React from 'react'
import "./index.css"
import Search from "../../assets/Search.svg"
import Alert from "../../assets/Alert.svg"
import Ojo from "../../assets/Ojo.svg"
import {navData} from "../../data/data"




export default function NavBar() {
    return (
    <>
     {navData.map(item => (
             <nav className="navbar navbar-expand-lg navbar-light bg-light body-container">
             <a className="navbar-brand navbar-logo" href="#">TransMonitor</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
            
 
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <div className="input-group input-bar">
                     <div className="input-group-prepend">
                         <span className="input-group-text search"><img src={Search} /></span>
                     </div>
                     <input placeholder="Search..." type="text" className="form-control search" aria-label="Amount (to the nearest dollar)" />
 
                 </div>
                 <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                         <a className="nav-link nav-item-color" href="#">Support <span className="sr-only ">(current)</span></a>
                     </li>
                     <li className="nav-item active">
                         <a className="nav-link nav-item-color" href="#">FAQ <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item active">
                         <a className="nav-link" href="#"> <img src={Alert} /></a>
                     </li>
 
                     <li className="nav-item active">
                         <div className="d-flex">
                             <div>
                                 <a className="nav-link nav-item-color p-0 d-flex justify-content-end font-reduced" href="#">Hello <span className="sr-only"></span></a>
                                 <a className="nav-link nav-item-color p-0" href="#">{item.name}<span className="sr-only"></span></a>
                             </div>
 
                         </div>
                     </li>
                     <li className="nav-item active">
                         <div>
                             <img className="img-circle" src={item.image} />
                         </div>
                     </li>
                 </ul>
 
             </div>
         </nav>
     
         ))}
    </>
      
    )
} 
