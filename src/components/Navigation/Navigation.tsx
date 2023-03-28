import React from 'react';
import logo from "../../images/logo.png"

import "./Navigation.scss";

const Navigation = () => {
        return (<>
                <nav className="sidebar close">
                        {/* <i className='bx bx-chevron-right toggle'></i> */}
                        <header>
                                <div className="image-text">
                                        <span className="image">
                                                <img src={logo} alt="logo" />
                                        </span>
                                        <div className="text header-text">
                                                <span className='name'>MService</span>
                                                <span className='profession'>Utility Management</span>
                                        </div>
                                </div>

                        </header>
                        <div className='menu-bar'>
                                <div className="men">
                                        {/* <li className="search-box">
                                                <a href="#" >
                                                        <i className='bx bx-search icon'></i>
                                                        <input type="search" placeholder='Search..' />
                                                </a>
                                        </li> */}
                                        <ul className="menu-links">
                                                <li className="nav-link">
                                                        <a href="#" >
                                                                <i className='bx bx-home-alt icon'></i>
                                                                <span className="text nav-text">Dashboard</span>
                                                        </a>
                                                </li>
                                                <li className="nav-link">
                                                        <a href="#" >
                                                                <i className='bx bx-bar-chart-alt-2 icon'></i>
                                                                <span className="text nav-text">Revenue</span>
                                                        </a>
                                                </li>
                                                <li className="nav-link">
                                                        <a href="#" >
                                                                <i className='bx bx-bell icon'></i>
                                                                <span className="text nav-text">Notification</span>
                                                        </a>
                                                </li>
                                                <li className="nav-link">
                                                        <a href="#" >
                                                                <i className='bx bx-pie-chart-alt icon'></i>
                                                                <span className="text nav-text">Analitics</span>
                                                        </a>
                                                </li>
                                                <li className="nav-link">
                                                        <a href="#" >
                                                                <i className='bx bx-heart icon'></i>
                                                                <span className="text nav-text">Likes</span>
                                                        </a>
                                                </li>
                                                <li className="nav-link">
                                                        <a href="#" >
                                                                <i className='bx bx-wallet icon'></i>
                                                                <span className="text nav-text">Wallets</span>
                                                        </a>
                                                </li>
                                        </ul>
                                </div>
                                <div className="bottom-content">
                                        <li className="nav-link">
                                                <a href="#" >
                                                        <i className='bx bx-log-out icon'></i>
                                                        <span className="text nav-text">Logout</span>
                                                </a>
                                        </li>
                                        <li className="mode">
                                                <div className="moon-sun">
                                                        <i className='bx bx-moon icon moon'></i>
                                                        <i className='bx bx-sun icon sun'></i>
                                                </div>
                                                <span className="mode-text text">Dark Mode</span>
                                                <div className="toggle-switch">
                                                        <span className="switch">

                                                        </span>
                                                </div>
                                        </li>
                                </div>
                        </div>
                </nav>
                <section className="home">
                        <div className="text">Dashboard</div>
                </section>
        </>
        )
}

export default Navigation;