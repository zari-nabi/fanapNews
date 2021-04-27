import React, { Fragment } from 'react';
import NavBar from './../../components/Navbar';
import logo from "../../assets/img/fanap-logo.png";

import { Link } from 'react-router-dom';

function Header() {

    return (
        <Fragment>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <Link to="/#about" className="get-started-btn">درباره ما</Link>
                    <NavBar />
                    <h1 className="logo mr-auto"><Link to="/">فناپ</Link></h1>
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width={40} height={40} />
                    </Link>
                </div>
            </header>


        </Fragment>
    )
}

export default Header;