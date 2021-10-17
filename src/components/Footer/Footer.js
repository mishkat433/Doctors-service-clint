import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="container mt-5 text-secondary" >
            <div className="row" >
                <div className="col-lg-3 mt-4 servic" >
                    <div className=" mt-5" >
                        <p > emergency dantal care </p>
                        <p > Check up </p>
                        <p > Treatment of presonal Diseases </p>
                        <p > Tooth extraction </p>
                        <p > check up </p>
                    </div >
                </div >
                <div className="col-lg-3 servic" >
                    <h5 className="footer-head" > Services </h5>
                    <p > emergency dantal care </p>
                    <p > Check up </p>
                    <p > Treatment of presonal Diseases </p>
                    <p > Tooth extraction </p>
                    <p > check up </p>
                    <p > check up </p>
                    <p > check up </p>
                </div >
                <div className= "col-lg-3 servic" >
                    <h5 className="footer-head" > oral Health </h5>
                    <p > emergency dantal care </p>
                    <p > Check up </p>
                    <p > Treatment of presonal Diseases </p>
                    <p > Tooth extraction </p>
                    <p > check up </p>
                    <p > check up </p>
                    <p > check up </p>
                </div>
                <div className="col-lg-3" >
                    <h5 className="footer-head" > Our address </h5>
                    <address > South mehernama bazar para, Pekua, cox 's bazar.</address>
                    <div className="icons" >
                        <i className="fab fa-facebook-f" > </i>
                        <i class="fab fa-google-plus-g" > </i>
                        <i class="fab fa-twitter" > </i>
                    </div>

                    <p className="text-capitalize call">call now</p>
                    <button className="appointment-btn mt-0 text-white" type="submit">+8801521486215</button>
                </div>
            </div>
            <p className="copy">Copyright &copy; Mishkat 2021 </p>
        </div>
    );
};

export default Footer;