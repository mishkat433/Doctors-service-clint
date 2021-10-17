import React from 'react';
import Footer from '../Footer/Footer';
import ApointmentHeader from './ApointmentHeader/ApointmentHeader';
import AvailableApointment from './AvailableAppointment/AvailableApointment';

const GetAppointment = () => {
    return (
        <div>
            <ApointmentHeader></ApointmentHeader>
            <AvailableApointment></AvailableApointment>
            <Footer></Footer>
        </div>
    );
};

export default GetAppointment;