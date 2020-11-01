import React from 'react'
import MainBody from '../mainbody'
import SideBar from '../sidebar'
import "./index.css"

export default function Body() {
    return (
        <div className="row top-row" >
           <SideBar/>
           <MainBody/>
        </div>
    )
}
