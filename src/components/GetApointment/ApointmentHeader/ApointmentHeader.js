import * as React from 'react';
import Navbar from '../../Navbar/Navbar';
import chair from "../../../images/MaskGroup1.png";
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';


const ApointmentHeader = () => {
     const [value, setValue] = React.useState(new Date()); 

    return (
        <div className="header-container">
            <Navbar></Navbar>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="text-capitalize font-weight-bold mb-5">appointment</h1>
                         <LocalizationProvider dateAdapter={AdapterDateFns}>
                             <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={value}
                                shouldDisableDate={isWeekend}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            /> 
                        </LocalizationProvider> 
                </div>
                    <div className="col-lg-6">
                        <img className="headerMain-chair" src={chair} alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApointmentHeader;