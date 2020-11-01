import React, { useState, useEffect } from 'react'
import Chart from "../../assets/Chart.svg"
import Arrow from "../../assets/Arrow.svg"
import Blue from "../../assets/Blue.svg"
import Search from "../../assets/Search.svg"
import { Transactions, Table, Dropdown, Items } from "../../data/data"
import { useCustomHook } from "../../customhooks"
import "./index.css"
import ReactPaginate from 'react-paginate';
import { items } from 'fusioncharts'
import { ApexChart } from '../charts'


export default function MainBody() {
    //Custom hooks
    const [main, setMain] = useCustomHook(false)
    const [currentPage, setCurrentPage] = useState(0);
    const [data] = useState(Table);
    const [filter, setFilter] = useState('all');
    const [term, setTerm] = useState('');
    const [projects, setProjects] = useState([]);

    //Pagination Constants
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;



    //UseEffect for filteration
    useEffect(() => {
        console.log('filter', filter)
        const filtered = filterTable(filter && filter.toLocaleLowerCase());
        setProjects(filtered);
    }, [filter]);

    useEffect(() => {
        const filtered = filterTable(term && term.trim().toLocaleLowerCase());
        setProjects(filtered);

    }, [term]);

    const has = (main, item) => {
        return main.toLocaleLowerCase().startsWith(item)
    }


    const filterTable = (filter) => {
        return (filter && filter === 'all' || filter === '') ? Table : Table.filter(f => {
            return has(f.status, filter) || has(f.name, filter) || has(f.price, filter) || has(f.no, filter)
        });

    }

    console.log('project', projects)
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    //Filtered data
    const currentPageData = projects.length ? projects
        .slice(offset, offset + PER_PAGE)
        .map(item =>
            <tbody>
                <tr className="white-bg">
                    <th className="borderless" scope="row"><p className="p-0 m-0 font-name"><span className="move-right"><img src={item.image} /></span>{item.name}</p></th>
                    <td className="vertical-align"><p className=" p-0 m-0 font-price">{item.price}</p></td>
                    <td className="vertical-align"><p className=" p-0 m-0 font-price">{item.no}</p></td>
                    <td className="vertical-align"> <p p className="p-0 m-0 font-price">{item.time}</p></td>
                    <td className="vertical-align">
                        <div className="btn-outline">
                            <span className="icon">
                                <img src={item.color} />
                            </span>
                            {item.status}
                        </div>
                    </td>
                    <td className="vertical-align"><img src={Arrow} /></td>
                </tr>
            </tbody>

        ) :
        <tbody className="text-center">
            <tr >
                <p>Cuurently no data</p>

            </tr>
        </tbody>
        ;
    const pageCount = Math.ceil(data.length / PER_PAGE);


    return (
        <div className="col-md-9 pad-left">
            <div className="pad-top">

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
                </div>
                <div className="row  other-row">
                    <div className="col-md-8 chart-area">
                        <ApexChart />
                    </div>
                    <div className="col-md-4">
                        {Items.map((item, index) => (
                            <div className="border-box" style={{marginTop: index === 1 ? "9%": "0px" }}>
                                <h6>{item.name}</h6>
                                <div className="d-flex pad-order">
                                    <div style={{ backgroundColor: "#27AE60", width: `${item.reconciled}%`, height: "5px", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} ></div>
                                    <div style={{ backgroundColor: "#FDC203", width: `${item.reconciled}%`, height: "5px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}> </div>

                                </div>
                                <p className="pending">Pending orders: <span className="yellow-color">{item.pending}</span></p>
                                <p className="pending">Reconciled orders: <span className="green-color">{item.reconciled}</span></p>
                        <p className="pending">Total orders: <span className="blue-color">{item.totalorders}</span></p>

                            </div>
                        ))}

                    </div>




                </div>

                <div className="col-md-12 other-row ">
                    <div>
                        <h3 className="payment">Payments</h3>
                        <div className="row payment-row d-flex align-items-end">
                            <div className="col-md-3">
                                <p className="showing p-0 m-0">Showing {PER_PAGE} <span><img src={Blue} /></span><span className="span-left">out of {Table.length} payments</span></p>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group input-search">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search-input"><img src={Search} /></span>
                                    </div>
                                    <input placeholder="Search payments" type="text" className="form-control search-input" aria-label="Amount (to the nearest dollar)" onChange={({ target: { value } }) => setTerm(value)} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex align-items-center">
                                    <div className="col-md-2">
                                        <p className=" showing p-0 m-0">Show</p>
                                    </div>
                                    <div className="col-md-10">
                                        <div>
                                            <div className="box row" onClick={setMain}>
                                                <div className="col-md-6">
                                                    <p className="p-0 m-0 showing">All</p>
                                                </div>
                                                <div className="col-md-6 d-flex justify-content-end">
                                                    <img src={Blue} />
                                                </div>

                                            </div>
                                            {main &&
                                                <div className="p-a" >
                                                    {Dropdown.map((item) =>
                                                        <div className="white-container" onClick={() => setFilter(item)}>
                                                            <p className="p-0 m-0 showing">{item}</p>
                                                        </div>
                                                    )}

                                                </div>
                                            }

                                        </div>


                                    </div>


                                </div>

                            </div>


                        </div>
                    </div>
                    <table class="table ">
                        <thead>
                            <tr className="grey-bg" >
                                <th className="font-head" scope="col">Item Type</th>
                                <th className="font-head" scope="col">Price</th>
                                <th className="font-head" scope="col">Transaction No</th>
                                <th className="font-head" scope="col">Time</th>
                                <th className="font-head" scope="col"></th>
                                <th className="font-head" scope="col"></th>
                            </tr>
                        </thead>
                        {currentPageData}

                    </table>
                    <div className="d-flex justify-content-between up-font">
                        <div>
                            <p className="small-font">Showing {currentPage + 1} to {pageCount} of {Table.length} entries</p>

                        </div>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            previousLinkClassName={"pagination__link"}
                            nextLinkClassName={"pagination__link"}
                            disabledClassName={"pagination__link--disabled"}
                            activeClassName={"pagination__link--active"}
                        />

                    </div>


                </div>






            </div>
        </div>
    )
}
