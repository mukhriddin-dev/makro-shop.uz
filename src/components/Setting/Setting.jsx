import React from 'react';
import Navbar from '../Navbar';
import Account from './component/Account';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import "./setting.css";
import Address from './component/Address';
import Payment from './component/Payment';
import Security from './component/Security';
const Setting = () => {
    return (
        <div>
            <Navbar />
            <div className="container settings">
                <BrowserRouter>
                    <div className="row d-xl-flex d-lg-flex d-md-block d-sm-block d-block">

                        {/* Sidebar in the settings page begin */}

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 left-blog">
                            <h4 className='mt-3'>Settings</h4>
                            <Link to="account" className="sidebar_item w-100 bg-light d-flex mt-3">
                                <ul className="col-2 sidebar-icon d-flex justify-content-start align-items-center mt-2 ms-3">
                                    <i class="far fa-user icon"></i>
                                </ul>
                                <ul className="col-10 mt-3">
                                    <h5 className='text-dark'>Account</h5>
                                    <p className='text-secondary'>Personal information</p>
                                </ul>
                            </Link>
                            <Link to="address" className="sidebar_item w-100 bg-light d-flex mt-3">
                                <ul className="col-2 sidebar-icon d-flex justify-content-start align-items-center mt-2 ms-3">
                                    <i class="fal fa-map-marker-alt icon"></i>
                                </ul>
                                <ul className="col-10 mt-3">
                                    <h5 className='text-dark'>Address</h5>
                                    <p className='text-secondary'>Shippings addresses</p>
                                </ul>
                            </Link>
                            <Link to="payment" className="sidebar_item w-100 bg-light d-flex mt-3">
                                <ul className="col-2 sidebar-icon d-flex justify-content-start align-items-center mt-2 ms-3">
                                    <i class="fal fa-credit-card icon_two"></i>
                                </ul>
                                <ul className="col-10 mt-3">
                                    <h5 className='text-dark'>Payment method</h5>
                                    <p className='text-secondary'>Connected credit cards</p>
                                </ul>
                            </Link>
                            <Link to="security" className="sidebar_item w-100 bg-light d-flex mt-3">
                                <ul className="col-2 sidebar-icon d-flex justify-content-start align-items-center mt-2 ms-3">
                                    <i class="far fa-shield icon_two"></i>
                                </ul>
                                <ul className="col-10 mt-3">
                                    <h5 className='text-dark'>Security</h5>
                                    <p className='text-secondary'>Password, 2FA</p>
                                </ul>
                            </Link>
                        </div>

                        {/* Sidebar in the settings page begin */}

                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 right_blog">
                            <h4 className='mt-3'>ㅤㅤㅤㅤ</h4>

                            <Routes>
                                <Route path="/setting" element={<Account />} />
                                <Route path="/account" element={<Account />} />
                                <Route path="/address" element={<Address />} />
                                <Route path="/payment" element={<Payment />} />
                                <Route path="/security" element={<Security />} />

                            </Routes>

                        </div>

                    </div>
                </BrowserRouter>
            </div>

        </div>
    );
};

export default Setting;