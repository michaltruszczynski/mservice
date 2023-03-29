import React from 'react';
import classNames from 'classnames/bind';
import logo from "../../images/logo.png"

import styles from  "./Nav.module.scss";

const cx = classNames.bind(styles);

const Navigation = () => {
        return (
                <>
                        <nav className={cx('sidebar', {'sidebar--close': false})} >
                                {/* <i className='bx bx-chevron-right toggle'></i> */}
                                <header className={cx('header')}>
                                        <div className={cx('header__content')}>
                                                <span className={cx('header__logo')}>
                                                        <img src={logo} alt="logo" className={cx('header__logo__image')} />
                                                </span>
                                                <div className={cx('header-text', 'header__text')}>
                                                        <span className={cx('header__text__heading1')}>MService</span>
                                                        <span className={cx('header__text__heading1')}>Utility Management</span>
                                                </div>
                                        </div>

                                </header>
                                <div className={cx('menu')}>
                                        <div className={cx('nav')}>
                                                {/* <li className="search-box">
                                                        <a href="#" >
                                                                <i className='bx bx-search icon'></i>
                                                                <input type="search" placeholder='Search..' />
                                                        </a>
                                                </li> */}
                                                <ul className={cx('nav__items')}>
                                                        <li className={cx('nav__item')}>
                                                                <a href="#"  className={cx('link')}>
                                                                        <i className={`bx bx-home-alt ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Dashboard</span>
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