import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function Account() {
    return (
        <>
            <div className="account_blog w-100">
                <h5 className='p-3'>Personal information</h5>

                {/* Changes Area begin */}
                <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12 account_changes d-flex align-items-center mb-xl-4 mb-lg-4 mb-md-4 mb-sm-0 mb-0">
                    <div className='setting_avatar'></div>
                    <Button className="h-25 ms-4 me-4" variant="outlined">Change</Button>
                    <Button className="h-25 text-secondary" variant="text">Remove</Button>
                </div>
                {/* Changes Area end */}


                {/* Input area in the account page begin */}
                <div className="col-12 account_inputs">
                    <TextField
                        id="outlined-required"
                        label="First name"
                        defaultValue="Jane"
                        className='account_input m-2'
                    />
                    <TextField
                        id="outlined-required"
                        label="Last name"
                        defaultValue="Robertson"
                        className='account_input m-2'
                    />
                    <TextField
                        id="outlined-required"
                        label="Email"
                        defaultValue="jane.robertson@example.com"
                        className='account_input m-2'
                    />
                    <TextField
                        id="outline-required"
                        label="Phone number"
                        defaultValue="(271) 555-0113"
                        className='account_input m-2'
                    />
                </div>
                {/* Input area in the account page end */}


                {/* CheckBox area in the account page begin */}
                <div className="check_box col-12 d-flex flex-column flex-wrap">
                    <h5 className='p-3'>Email notification</h5>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox defaultChecked />}
                        label="New deals"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox defaultChecked />}
                        label="New restaurants"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Order statuses"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox defaultChecked />}
                        label="Password changes"
                        labelPlacement="end"
                        className='checkBox_helper'
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Special offers"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox defaultChecked />}
                        label="Newsletter"
                        labelPlacement="end"
                    />
                </div>
                {/* CheckBox area in the account page end */}


                <div className="col-12 account_ending p-2 d-xl-flex d-lg-flex d-md-block d-sm-block d-block mt-1 text-center">
                    <Button color="error" variant="outlined" className='col-xl-2 col-lg-2 col-md-12 col-sm-10 col-10 h-75' >Log out</Button>
                    <ul className='container-fluid col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12 h-75 d-xl-flex d-lg-flex d-md-flex d-sm-block d-block justify-content-around mt-xl-0 mt-lg-0 mt-md-1 mt-sm-2 mt-2'>
                        <Button variant="outlined" className='text-secondary border-secondary col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 h-100 account_btn me-xl-2 me-lg-2 me-md-2 me-sm-0'>Discard changes</Button>
                        <Button variant="contained" className='col-6 h-100 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 account_btn mt-xl-0 mt-lg-0 mt-md-0 mt-sm-1 mt-1'>Save changes</Button>
                    </ul>
                </div>
            </div>
        </>
    )
}
