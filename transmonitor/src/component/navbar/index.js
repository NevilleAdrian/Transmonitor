import React from 'react'
import "./index.css"
import Search from "../../assets/Search.svg"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light body-container">
            <a className="navbar-brand navbar-logo" href="#">TransMonitor</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="input-group input-bar">
                    <div className="input-group-prepend">
                        <span className="input-group-text search"><img src={Search}/></span>
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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
} 
