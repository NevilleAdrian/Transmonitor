import React from 'react'
import Chart from "../../assets/Chart.svg"
import { XYPlot, XAxis, YAxis, HorizontalGridLines, AreaSeries } from 'react-vis';

import { Transactions, Table } from "../../data/data"
import "./index.css"
import { ChartViewer } from '../chart';


export default function MainBody() {
    return (
        <div className="col-md-9 pad-left">
            <div className="pad-top">
                <div>
                    <div className="row admin-row">
                        {Transactions.map(item => (

                            <div className="col-md-3">
                                <div className="mainbody">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <p className="main-body-name m-0">{item.name}</p>
                                            <p className="main-body-number m-0">{item.number}</p>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={Chart} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))}
                        <div className="col-md-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Item Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Transaction No</th>
                                    <th scope="col">Time</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {Table.map(item => (
                            <tbody>
                            <tr>
                            <th scope="row"><p className="p-0 m-0 font-name"><span className="move-right"><img src={item.image}/></span>{item.name}</p></th>
                                <td>{item.price}</td>
                                <td>{item.no}</td>
                                <td>{item.time}</td>
                                <td>{item.status}</td>
                            </tr>
                            </tbody>
                            ))}
                           
                        </table>
                  
                        </div>
                      
                    </div>

                </div>


            </div>
        </div>
    )
}
