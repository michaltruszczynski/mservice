import React, { useState } from 'react';
import classNames from 'classnames/bind';
import logo from "../../images/logo.png"

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

const Navigation = () => {
        const [darkMode, setDarkMode] = useState(false);

        const darkModeHandler = () => {
                console.log('test')
                console.log(darkMode)
                setDarkMode(prevState => !prevState)
        }

        return (
                <>
                        <nav className={cx('sidebar', { 'sidebar--close': false })} >
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
                                                                <a href="#" className={cx('link')}>
                                                                        <i className={`bx bx-home-alt ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Dashboard</span>
                                                                </a>
                                                        </li>
                                                        <li className={cx('nav__item')}>
                                                                <a href="#" className={cx('link')}>
                                                                        <i className={`bx bx-bar-chart-alt-2 ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Revenue</span>
                                                                </a>
                                                        </li>
                                                        <li className={cx('nav__item')}>
                                                                <a href="#" className={cx('link')}>
                                                                        <i className={`bx bx-bell ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Notification</span>
                                                                </a>
                                                        </li>
                                                        <li className={cx('nav__item')}>
                                                                <a href="#" className={cx('link')}>
                                                                        <i className={`bx bx-pie-chart-alt ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Analitics</span>
                                                                </a>
                                                        </li>
                                                        <li className={cx('nav__item')}>
                                                                <a href="#" className={cx('link')}>
                                                                        <i className={`bx bx-heart ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Likes</span>
                                                                </a>
                                                        </li>
                                                        <li className={cx('nav__item')}>
                                                                <a href="#" className={cx('link')}>
                                                                        <i className={`bx bx-wallet ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Wallets</span>
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div className={cx('bottom')}>
                                                <ul className={cx('bottom__content')}>
                                                        <li className={cx('nav__item')}>
                                                                <a href="#" className={cx('link')}>
                                                                        <i className={`bx bx-log-out ${cx('icon')}`}></i>
                                                                        <span className={cx('link__text')}>Logout</span>
                                                                </a>
                                                        </li>
                                                        <li className={cx('mode')}>
                                                                <div className={cx('moon-sun')}>
                                                                        <i className={`bx bx-moon ${cx('icon-mode', { 'moon': darkMode })}`}></i>
                                                                        <i className={`bx bx-sun ${cx('icon-mode', { 'sun': !darkMode })}`}></i>
                                                                </div>
                                                                <span className={cx('mode__text')}>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                                                <div className={cx('toggle-switch')}>
                                                                        <label className={cx('toggle-switch__label')} htmlFor="ts">
                                                                                <input type="checkbox" className={cx('toggle-switch__checkbox')} name="ts" id="ts" checked={darkMode} onChange={darkModeHandler} />
                                                                                <span className={cx('toggle-switch__button')} />
                                                                        </label>
                                                                </div>

                                                        </li>
                                                </ul>
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