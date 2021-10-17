import React from 'react';
import ApointmentHistory from '../ApointmentHistory/ApointmentHistory';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import DantalCare from '../DantalCare/DantalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testomonial from '../Testomonial/Testomonial';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DantalCare></DantalCare>
            <ApointmentHistory></ApointmentHistory>
            <Testomonial></Testomonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;