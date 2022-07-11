import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg h6 pt-4 navbar-light">
            <h6>{loginUser.email}</h6>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link mr-5" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Dental Services</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/reviews" className="nav-link mr-5 text-white">Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link mr-5 text-white" href="/">Login</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            {setLoginUser}
        </nav>
    );
};

export default Navbar;