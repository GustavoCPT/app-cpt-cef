//https://www.youtube.com/watch?v=KISMYYXSIX8 tempo: 48:00
import React, { Component, useContext } from 'react'

import { NavLink } from 'react-router-dom'

import AuthContext from '../Context/auth';

const HeaderCef: React.FC = () => {

    // fazer o logout
    const context = useContext(AuthContext);
    const { signOut } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    function handleLogout() {
        signOut();
        console.log('logout');
    }


    return (
        <div>
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div className="container">
                    
                    

                    <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <NavLink to="/Home" className="navbar-brand">
                        <img src="/dist/img/CEF.png" alt="CPT" className="brand-image " style={{}} />
                        <span className="brand-text font-weight-light">CPT Softwares</span>
                    </NavLink>

                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">


                            <li className="nav-item">
                                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                            </li>

                            <li className="nav-item dropdown">
                                <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Lançamentos</a>
                                <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                                    <li><a href="/posting" className="dropdown-item">Lançamento 1 </a></li>
                                    <li><a href="#" className="dropdown-item">Lançamento 2 </a></li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                                <li><NavLink to="/user" className="nav-link">Dados do usuário</NavLink></li>
                            </li>
                        </ul>

                    </div>
                    {/* Right navbar links */}
                    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                        <li className="nav-item d-none d-sm-inline-block">
                            <li><NavLink to="/user"  className="nav-link">Olá, </NavLink></li>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i className="fas fa-expand-arrows-alt" />
                            </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                            <li><NavLink to="/" onClick={handleLogout} className="nav-link">Sair</NavLink></li>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* /.navbar */}




        </div>

    )

}

export default HeaderCef

/*
{!isLoading && !user && (
    <button
        className="btn btn-primary btn-block"
        onClick={() => loginWithRedirect()}
    >
        Log In
    </button>
)}
 {!isLoading && !user && (
    <button
        className="btn btn-primary btn-block"
        onClick={() => logout()}
    >
        Log Out
    </button>
)}*/