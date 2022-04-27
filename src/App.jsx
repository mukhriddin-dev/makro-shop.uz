import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Account from './components/Setting/component/Account';
import Setting from './components/Setting/Setting';
import Address from './components/Setting/component/Address';
import Payment from './components/Setting/component/Payment';
import Security from './components/Setting/component/Security';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/setting' element={<Setting/>}>
            {/* <Route path="/setting/" element={<Account />} /> */}
            <Route path="/setting/account" element={<Account />} />
            <Route path="/setting/address" element={<Address />} />
            <Route path="/setting/payment" element={<Payment />} />
            <Route path="/setting/security" element={<Security />} />
        </Route>
        
        {/* <Route path='/' element={<Home />}>
            <Route path='/settings' element={<Setting/>}/>
        </Route> */}
        

      </Routes>
    </BrowserRouter>




        {/* <Home/> */}
        {/* <Setting4/> */}
    </>
  );
};

export default App;